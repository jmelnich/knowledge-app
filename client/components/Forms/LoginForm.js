import React from 'react'

const LoginForm = (props) => {
    return (
        <div id="loginForm">
            <div className="modal__login">
                <a href="#" className="modal__close">X</a>
                <div className="modal__login__content">
                    <h2>Log in</h2>

                    <div className="modal__login__content__or">или</div>
                    <hr/>
                    <form className="modal__login__content__form">
                        <label>Почта</label>
                        <input type="text"/>
                            <label>Пароль</label>
                            <input type="password"/>
                    </form>
                    <a href="#restorePassword">Забыли пароль?</a>
                    <button className="modal__login__content__button">Войти</button>
                    <p>Нет аккаунта? <a href="#signUp"> Зарегистрироваться</a></p>

                </div>
            </div>
        </div>
    );
}

export default LoginForm;