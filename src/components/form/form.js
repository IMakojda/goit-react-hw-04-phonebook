import { useState } from "react";

import s from './form.module.css'

export default function Form({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('+380');

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });

        resetState();
    };

    const resetState = () => {
        setName('');
        setNumber('+380');
    };
    return (
        <form onSubmit={handleSubmit}>
            <label className={s.label_form}>Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                    className={s.input_form}
                />
            </label>

            <label className={s.label_form}>Phone Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                    className={s.input_form}
                />
            </label>

            <button type="submit" className={s.btn_form}>add contacts</button>
        </form>
    )

};


// class Form extends Component {
//     state = {
//         name: '',
//         number: '+380'
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state)
//         this.handleReset();
//     }

//     handleChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({ [name]: value })
//     }

//     handleReset = () => {
//         this.setState({
//             name: '',
//             number: '+380'
//         })
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label className={s.label_form}>Name
//                     <input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                         className={s.input_form}
//                     />
//                 </label>

//                 <label className={s.label_form}>Phone Number
//                     <input
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         value={this.state.number}
//                         onChange={this.handleChange}
//                         className={s.input_form}
//                     />
//                 </label>

//                 <button type="submit" className={s.btn_form}>add contacts</button>
//             </form>
//         )
//     }
// }

// export default Form;