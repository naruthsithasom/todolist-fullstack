import React, { useState } from 'react'
import { Row, Col, Button, Input } from 'antd'
import axios from 'axios'

export default function Todo(props) {

  const [changeInput, setChangeInput] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  let content = null

  let updateTodoItem = async (id) => {
    await axios.put(`http://localhost:8000/todo-list/${id}`, { task: changeInput })
    props.fetchData()//อ่านข้อมูลหลังจาก put update props มาจาก TodoTask
    setIsEdit(false)
  }
  const toggleEdite = () => {
    setChangeInput(props.items.task)
    setIsEdit(true)
  }
   content = (
    <Row style={{ width: '100%' }}>
      <Col span={20}>
        <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} />
      </Col>
      <Col span={4}>
        <Button type="primary" onClick={() => updateTodoItem(props.items.id)}>Done</Button>
      </Col>
    </Row>
  )
  //*** สามารถแทรกคำสั่งได้
    if (!isEdit) {
      content = (     
        <Row style={{ width: '100%' }}>
          <Col span={2}>
            {props.items.id + '.'}
            {console.log(props.items.id)}
          </Col>
          <Col span={14} style={{ textAlign: 'left' }}>
            {props.items.task}
            {console.log(props.items.task)}
          </Col>
          <Col span={4}>
            <Button style={{ backgroundColor: 'orange' }} onClick={() => toggleEdite()}>Edit</Button>
          </Col>
          <Col span={4}>
            <Button type="danger" onClick={() => props.del(props.items.id)}>Delete</Button>
          </Col>
        </Row>
      )
    }

  return (
    <div style={{ width: '100%' }}>
      {content}
    </div >
  )
}
