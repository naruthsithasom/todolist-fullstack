import React, { useEffect, useState } from 'react';
import { List, Input, Button, Row, Col, Divider, Typography } from 'antd';
import _ from 'lodash'

const { Text } = Typography

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputField, setInputField] = useState("")

  const addTodoItem = () => {

    const newTodoList = [...todoList]
      newTodoList.push({
        id: _.uniqueId,
        task: inputField,
      })
      setTodoList(newTodoList)
      setInputField("")
  }

  return (

    // <div>
    //   {todoList.map( todo => <div key={todo.id} > {todo.task} </div>)}
    // </div>  
    <Row justify="center" >
      <Col>
        <Row style={{ justifyContent:'center'}}>
          <Text type="danger">กรุณาใส่ Todo ที่ต้องการเพิ่ม</Text>
        </Row>
        <Row justify="center">
          <Col span={ 20 }>
            <Input value={ inputField } onChange={ (e) => setInputField( e.target.value )} />
          </Col>
          <Col span={ 4 }>
            <Button style={{ width: '100%' }} onClick={ addTodoItem }>Add</Button>
          </Col>
        </Row>
        <Divider />
        <Row style={{ alignContent: 'center'}}>
          <List
            style={{ width: '450px' }}
            header={<div> Todo List pages </div>}
            bordered
            dataSource={todoList}
            renderItem={todo => (
              <List.Item>
                {todo.task}
              </List.Item>
            )} />
        </Row>
      </Col>
    </Row>
  )
}