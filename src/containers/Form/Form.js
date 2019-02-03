import React, { Component } from 'react';
import styles from './Form.scss';
import axios from '../../axios';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

class Form extends Component {
    state = {
        contactForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter your message'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }
        },
        loading: false
    }

    contactHandler = (event) => {
        event.preventDefault();
        this.setState({ loading:true });
        const data= {};
        for (let formElementIdentifier in this.state.contactForm) {
            data[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
        }

        axios.post('contact', data)
        .then(response => {
            this.setState({ loading: false })
            this.props.history.push('/');
        })
        .catch(error => this.setState({ loading: false }));
    }

    checkValidity(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactForm
        }

        const updatedFormElement = {
            ...updatedContactForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedContactForm[inputIdentifier] = updatedFormElement;
        this.setState({ contactForm: updatedContactForm });
    }

    render () {
        let formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        let form = (
            <form onSubmit={this.contactHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button>SUBMIT</Button>
            </form>
        )

        if (this.state.loading) {
            form = <Spinner/>;
        }

        return(
            <div className={styles.Form}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default Form;