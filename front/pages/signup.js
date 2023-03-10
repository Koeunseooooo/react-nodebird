import { useState, useCallback} from 'react'
import AppLayout from "../components/AppLayout"
import Head from "next/head"
import { Form, Input, Button, Checkbox} from 'antd'
import styled from 'styled-components'
import useinput from '../hooks/useinput'

const ErrorMessage = styled.div`
    color: red;
`

const Signup = () => {
    const [id, onChangeId]=useinput('')
    const [nickname, onChangeNickname]=useinput('')

    const [password, onChangePassword]=useinput('')
    const [passwordCheck, setPasswordCheck]=useState('')
    const [passwordError, setPasswordError]=useState(false)
    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value)
        setPasswordError(e.target.value !== password)
    },[password])

    const [term,setTerm]=useState('')
    const [termError, setTermError]=useState(false)
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked)
        setTermError(false)
    },[term])

    

    const onSubmit = useCallback(()=>{
        if (password !== passwordCheck){
            return setPasswordError(true)
        }
        if(!term){
            return setTermError(true)
        }
        // 사용자의 입력 체크는 여러번 체크하여도 지나치지 않음
        console.log(id, password, nickname)
    },[password,passwordCheck,term])
    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>  
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br/>
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 체크</label>
                    <br/>
                    <Input 
                        name="user-id" 
                        type="password"
                        value={passwordCheck}  
                        required 
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>위의 약관에 모두 동의합니다.</Checkbox>
                {termError && <ErrorMessage>약관에 동의해야 합니다.</ErrorMessage>}
                <div style={{margin:10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
  
    );
}

export default Signup;