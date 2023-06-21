import React, {useEffect, useState} from 'react';
import {updateToDo} from "../../redux/actions/todo";
import {connect} from "react-redux";
import {Button, Form, Input, message, Spin} from "antd";
import axios from "axios";
import {useParams} from "react-router-dom";

function Edit(props) {
    const {id} = useParams();
    const [todo, setTodo] = useState({})

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/todos/${id}`).then(({data}) => setTodo(data))
    }, [id])

    function handelSubmit(values) {
        axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {values})
            .then(() => {
                message.success('Todo Successfully Updated!')
                console.log('handelSubmit', values)
                props.update({...values, id})
            })
    }

    if (!todo.id) {
        return <Spin/>
    }

    return (
        <div>
            <Form onFinish={handelSubmit} initialValues={todo}>
                <Form.Item
                    label="title"
                    name="title"
                >
                    <Input/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Edit To-do
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        update: data => {
            dispatch(updateToDo(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
