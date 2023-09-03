import './login.css'
import { SetStateAction, useState } from "react"
import { Button, Input, message } from "antd"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { actions } from '../../store/reducers'

const Login = () => {
    sessionStorage.username = 'user'
    sessionStorage.password = '123456'
    sessionStorage.isLogin = false

    const [ userNameValue, setUserNameValue ] = useState('')
    const [ passwordValue, setPasswordValue ] = useState('')
    const [ statusInput, setStatusInput ] = useState(true)
    const [ messageApi, contextHolder ] = message.useMessage()
    const dispatch = useDispatch()

    const redirectTo = useNavigate()

    const success = () => {
        messageApi.open({
        type: 'success',
        content: 'Успешно',
        })
    }

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Неверный логин или пароль',
        })
    }

    const onChangeUserName = (evt: { target: { value: SetStateAction<string> } }) => {
        setUserNameValue(evt.target.value)
    }

    const onChangePassword = (evt: { target: { value: SetStateAction<string> } }) => {
        setPasswordValue(evt.target.value)
    }

    const checkPassword = () => {
        if(userNameValue == sessionStorage.username && passwordValue == sessionStorage.password) {
            success()
            setStatusInput(true)
            dispatch(actions.login())
            redirectTo('/posts')
        } else {
            error()
            setStatusInput(false)
        }
    }

    return (
        <div className="login_wrapper">
            {contextHolder}
            <div className="login">
                <p className="login_text">Вход в систему</p>
                <Input status={statusInput ? ("") : ("error")} value={userNameValue} onChange={onChangeUserName} type="text" placeholder="Логин" className="login_input" />
                <Input status={statusInput ? ("") : ("error")} value={passwordValue} onChange={onChangePassword} type="text" placeholder="Пароль" className="password_input" />
                <Button onClick={checkPassword}>Войти</Button>
            </div>
        </div>
    )
}

export default Login