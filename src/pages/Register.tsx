import { useNavigate, useParams } from 'react-router-dom';
import './Register.css';
import { supabase } from '../lib/supabaseClient';
import { useState } from 'react';
import BlueButton from '../components/GlobalComponents/BlueButton';
import WhiteButton from '../components/GlobalComponents/WhiteButton';


interface EventData {
    titulo: string;
    horario_1: string;
    horario_2: string;
    deadline: string;
}

const eventData: Record<string, EventData> = {
    'foundations-model': {
        titulo: 'Foundations Model',
        horario_1: '11:00 - 13:00',
        horario_2: '15:00 - 16:00',
        deadline: '12 de Abril',
    },
    'vision-pro': {
        titulo: 'Vision Pro Experience',
        horario_1: '11:00 - 13:00',
        horario_2: '15:00 - 16:00',
        deadline: '19 de Abril',
    },
    'vision-pro-2': {
        titulo: 'Vision Pro - Sesión 2',
        horario_1: '11:00 - 13:00',
        horario_2: '15:00 - 16:00',
        deadline: '26 de Abril',
    },
    'foundations-model-2': {
        titulo: 'Foundations Model - Sesión 2',
        horario_1: '11:00 - 13:00',
        horario_2: '15:00 - 16:00',
        deadline: '3 de Mayo',
    },
};

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
    const evento = id ? eventData[id] : null;
    const navigate = useNavigate();


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
                event_id: '0e606c9b-a126-4ed3-87d3-02365a2b6788'
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
                <p>Te esperamos en el {evento?.titulo ?? 'Workshop'}.</p>
                <BlueButton text='Volver al inicio' onClick={() => navigate('/')} />
            </div>
        );
    }

    return (
        <div className='registerContainer'>
            <h1>{evento ? evento.titulo : 'Workshop'} — Registro</h1>
            <p>
                {evento
                    ? `Regístrate antes del ${evento.deadline}`
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

                <div className="inputRow">
                    <label className="inputLabel">Horario</label>
                    <select
                        name="selectedSchedule"
                        className="textInput"
                        required
                        value={form.selectedSchedule}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona un horario</option>
                        <option value={evento?.horario_1 ?? '11:00 - 13:00'}>
                            {evento?.horario_1 ?? '11:00 - 13:00'}
                        </option>
                        <option value={evento?.horario_2 ?? '15:00 - 16:00'}>
                            {evento?.horario_2 ?? '15:00 - 16:00'}
                        </option>
                    </select>
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
                    <WhiteButton text='Volver'/>
                </div>
            </form>
        </div>
    );
}
