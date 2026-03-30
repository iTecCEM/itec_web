import { useNavigate, useParams } from 'react-router-dom';
import './Register.css';
import { supabase } from '../lib/supabaseClient';
import { useState, useEffect } from 'react';
import BlueButton from '../components/GlobalComponents/BlueButton';
import Navbar from '../components/GlobalComponents/Navbar';

interface EventData {
    id: string;
    name: string;
    schedules: string[];
    dead_line: string;
}

interface RegistrationForm {
    firstName: string,
    lastName: string,
    email: string,
    studentId: string,
    selectedSchedule: string,
    extraInfo: string
}

export default function Registro() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [evento, setEvento] = useState<EventData | null>(null);

    useEffect(() => {
        async function fetchEvent() {
            if (!id) return;
            const { data, error } = await supabase
                .from('events')
                .select('id, name, schedules, dead_line')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching event:', error);
            } else {
                setEvento(data);
            }
        }
        fetchEvent();
    }, [id]);


    const [form, setForm] = useState<RegistrationForm>({
        firstName: '',
        lastName: '',
        email: '',
        studentId: '',
        selectedSchedule: '',
        extraInfo: '',
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}))
        
    }

    async function registerUser(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setError(null)


        const { error } = await supabase
            .from('registrations')
            .insert({
                first_name: form.firstName,
                last_name: form.lastName,
                email: form.email,
                student_id: form.studentId,
                selected_schedule: form.selectedSchedule,
                extra_info: form.extraInfo,
                event_id: id
            })
        if (error) {
            setError(error.message.includes('full capacity')
                ? 'El evento ya no tiene lugares disponibles' : 'Ocurrio un error. Intenta de nuevo'
            )
        } else {
            setSuccess(true)
        }

        setLoading(false)
    }

    if (success) {
        return (
            <div className='registerContainer'>
                <h1>¡Registro exitoso!</h1>
                <p>Te esperamos en el {evento?.name ?? 'Workshop'}.</p>
                <BlueButton text='Volver al inicio' onClick={() => navigate('/')} />
            </div>
        );
    }

    return (
        <div className='registerContainer'>
            <Navbar></Navbar>
            <h1>{evento ? evento.name : 'Workshop'} Registro</h1>
            <p>
                {evento
                    ? `Regístrate antes del ${new Date(evento.dead_line).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}`
                    : 'Regístrate con tu información'}
            </p>
            <hr />

            <form className="formSection" onSubmit={registerUser}>
                <h2>Tu información</h2>

                <div className="inputRow">
                    <label className="inputLabel">Nombre</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        required
                        className="textInput"
                        value={form.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className="inputRow">
                    <label className="inputLabel">Apellido</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className="textInput"
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="inputRow">
                    <label className="inputLabel">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="mail@example.com"
                        required
                        className="textInput"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="inputRow">
                    <label className="inputLabel">Matricula</label>
                    <input
                        type="text"
                        name="studentId"
                        placeholder="A000000"
                        required
                        className="textInput"
                        value={form.studentId}
                        onChange={handleChange}
                    />
                </div>

                <div className="inputRow horarioRow">
                    <label className="inputLabel">Horario</label>
                    <div className="radioGroup">
                        {evento?.schedules?.map((schedule, i) => (
                            <label key={i} className="radioOption">
                                <input
                                    type="radio"
                                    name="selectedSchedule"
                                    value={schedule}
                                    required
                                    checked={form.selectedSchedule === schedule}
                                    onChange={handleChange}
                                />
                                {schedule}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="textareaRow">
                    <label className="textareaLabel">
                        Queremos saber si has tenido alguna experiencia previa con lo que se impartira en el Workshop. Si tienes alguna compartela
                    </label>
                    <textarea
                        name="extraInfo"
                        value={form.extraInfo}
                        onChange={handleChange}
                    />
                </div>

                {error && <p style={{ color: 'red', marginTop: '12px' }}>{error}</p>}

                <div className='buttonArea'>
                    <button type="submit" className="BlueButton" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                    {/* <WhiteButton text='Volver'/> */}
                </div>
            </form>
        </div>
    );
}
