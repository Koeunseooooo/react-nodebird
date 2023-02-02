import AppLayout from "../components/AppLayout"
import Head from "next/head"
import {Form} from 'antd'
const Signup = () => {
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
            </Form>
        </AppLayout>
  
    );
}

export default Signup;