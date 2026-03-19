import { useParams } from 'react-router-dom';
import './Register.css';
import BlueButton from '../components/GlobalComponents/BlueButton';

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

export default function Registro() {
    const { id } = useParams<{ id: string }>();
    const evento = id ? eventData[id] : null;

    return (
        <div className='registerContainer'>
            <h1>{evento ? evento.titulo : 'Workshop'} — Registro</h1>
            <p>
                {evento
                    ? `Regístrate antes del ${evento.deadline}`
                    : 'Regístrate con tu información'}
            </p>
            <hr />

            <div className="formSection">
                <h2>Tu información</h2>

                <div className="inputRow">
                    <label className="inputLabel">Nombre</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="textInput"
                    />
                </div>

                <div className="inputRow">
                    <label className="inputLabel">Email</label>
                    <input
                        type="email"
                        placeholder="mail@example.com"
                        required
                        className="textInput"
                    />
                </div>

                <div className="inputRow">
                    <label className="inputLabel">Matricula</label>
                    <input
                        type="text"
                        placeholder="A000000"
                        required
                        className="textInput"
                    />
                </div>

                <div className="inputRow">
                    <label className="inputLabel">Horario</label>
                    <select name='horario' className="textInput" required>
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
                    <textarea required />
                </div>
            </div>

            <div className='buttonArea'>
                <BlueButton text='Enviar'/>
            </div>
        </div>
    );
}
