import './Register.css';

export default function Registro() {
    return (
        <div className='registerContainer'>
            <h1>Vision Pro Workshop submission</h1>
            <p>Registrate con tu informacion para el Vision Pro Workshop antes del 25 de febrero</p>
            <hr />

            <div className="formSection">
                <h2>Tu informacion</h2>

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
                        <option value="11:00-13:00">11:00 - 13:00</option>
                        <option value="15:00-16:00">15:00 - 16:00</option>
                    </select>
                   
                </div>

                <div className="textareaRow">
                    <label className="textareaLabel">
                        Queremos saber si has tenido alguna experiencia previa con lo que se impartira en el Workshop. Si tienes alguna compartela
                    </label>
                    <textarea required />
                </div>
            </div>
        </div>
    );
}
