import React, { useState, useEffect } from 'react'
import { List, Row, Col, Divider, Button, Typography } from 'antd'
import _ from 'lodash'
import axios from 'axios'

function TodoTask() {

  const { Text } = Typography
  const [todoTask, setTodoTask] = useState([])//todoTask=[]
  const [inputField, setInputField] = useState('')// inputField=''

  const fetchTodoTask = async () => {
    const res = await axios.get("http://localhost:8000/todo-list")
    setTodoTask(res.data) //ส่งtodoTask แสดงผล
  }

  useEffect(() => { //เก็บข้อมูลจาก Fech ลง UseEffect
    fetchTodoTask()
  }, [])

  //Monk Data สร้างข้อมูลจำลอง
  // useEffect(() => {
  //   setTodoTask([
  //     {
  //       id: 1,
  //       task: 'Do Homework'
  //     },
  //     {
  //       id: 2,
  //       task: 'Play game online',
  //     },
  //     {
  //       id: 3,
  //       task: 'Watch Youtube'
  //     },
  //     {
  //       id: 4,
  //       task: 'Do Someting'
  //     },
  //   ])
  // }, [])
  const addTodoItem = () => {
    const task = inputField
    const newTodoTask = [...todoTask]
    newTodoTask.push(
      {
        id: _.uniqueId(),
        task: inputField,
      })
    setTodoTask(newTodoTask)//ส่งข้อความและแสดงผล
    setInputField('')//หลังจากกรอกข้อความต้องทำให้inputส่าง
  }

  const deleteTodoItem = (id) => {
    const newTodoTask = todoTask.filter( deleteId => deleteId.id !== id)
    setTodoTask(newTodoTask)
  }

  return (
    <div style={{ width: '500px', margin: 'auto' }}>

      {/* {todoTask.map((item) => {
        return (
          <div key={item.id}> {item.task} </div>
        )
      })} */}
      <Row>
        <Text type="warning">กรุณาใ่ข้อความ</Text>
      </Row>

      <Row>
        <Col span={20}>
          <input style={{ width: '100%', height: '40px' }} value={inputField} onChange={(e) => setInputField(e.target.value)} />
        </Col>
        <Col span={4}>
          <Button style={{ width: '100%', height: '40px' }} onClick={addTodoItem}>OK</Button>
        </Col>
      </Row>
      <Divider />
      <List
        header={<div style={{ backgroundColor: 'yellow' }}>แสดงผลข้อความ</div>}
        bordered
        dataSource={todoTask}
        renderItem={item => (
          <List.Item>
            <Row style={{width:'100%'}}>
              <Col span={2}>
                {item.id + '.'}
              </Col>
              <Col span={18} style={{ textAlign: 'left' }}>
                {item.task}
              </Col>
              <Col span={4}>
                <Button type="danger" onClick={() => deleteTodoItem(item.id)}>Delete</Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  )
}
export default TodoTask