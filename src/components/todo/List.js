import React, {useEffect} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {removeToDo, setListToDo} from "../../redux/actions/todo";
import {message, Popconfirm, Table} from "antd";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import Add from "./Add";
import {Link} from "react-router-dom";

function List(props) {
    const columns = [
        {
            title: 'title',
            dataIndex: 'title',
        },
        {
            key: 'actions',
            title: 'عملیات',
            render: (_, record) => (
                <>
                    <Popconfirm
                        title='آیا از حذف این رکورد مطمین هستید؟'
                        onConfirm={() => props.removeItem(record.id)}
                    >
                        <DeleteOutlined
                            style={{margin: '10px', color: 'red', cursor: 'pointer'}}
                        />
                    </Popconfirm>
                    <Link to={`/todo/${record.id}/edit`}>
                        <EditOutlined />
                    </Link>
                </>
            )
        }
    ];

    useEffect(() => {
        getAllToDos(props);
    })

    return (

        <div>
            <Add/>
            <Table dataSource={props.todo} columns={columns} rowKey='id'/>
        </div>
    );
}

function getAllToDos(props) {
    axios('https://jsonplaceholder.typicode.com/todos').then(({data}) => props.setList(data))
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        setList: data => dispatch(setListToDo(data)),
        removeItem: id => {
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(() => {
                message.success('آیتم با موفقیت حذف شد')
                dispatch(removeToDo(id))
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);


