import React from 'react';
import {addNewToDo} from "../../redux/actions/todo";
import {connect} from "react-redux";
import {Button, Form, Input, message} from "antd";
import axios from "axios";

function Add(props) {

    function handelSubmit (values) {
        console.log('handelSubmit',values)
        axios('https://jsonplaceholder.typicode.com/todos', { method: 'POST', data: values })
            .then(() => {
                message.success('کاربر با موفقیت ساخته شد')
                props.add(values)
            })
    }

    return (
        <div>
            <Form  onFinish={handelSubmit}>
                <Form.Item
                    label="title"
                    name="title"
                    rules={[{ message: 'Please input todo!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add To-do
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
        add: data => {
            console.log('mapDispatchToProps',data)
            dispatch(addNewToDo(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Add);
