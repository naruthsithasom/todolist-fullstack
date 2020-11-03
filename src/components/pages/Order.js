import React, { useState } from 'react'
import { Row, Col, Typography, Button, Divider, List, Input, Select, Popconfirm } from 'antd'
import _ from 'lodash'
export default function Order() {

  const { Text } = Typography
  const { Option } = Select
  const [listTask, setListTask] = useState([])
  const [inputList, setInputList] = useState('')
  const [inputUnit, setInputUnit] = useState('')
  const [inputPrice, setInputPrice] = useState('')
  const [selectCode, setSelectCode] = useState('')
  const [isSave,setIsSave] = useState(false)

  let save = null

  const addItem = () => {
    const newList = [...listTask]
    newList.push(
      {
        id: _.uniqueId(1),
        code: selectCode,
        list: inputList,
        unit: inputUnit,
        price: inputPrice
      })
    setListTask(newList)
    setInputList('')
    setInputUnit('')
    setInputPrice('')
    setIsSave(true)
  }

  const deleteItem = (id) => {
    let newList = [...listTask]
    let targetIndex = newList.findIndex(item => item.id === id)
    newList.splice(targetIndex, 1)
    setListTask(newList)

    if(newList.length === 0){
      console.log(newList.length)
      setIsSave(false)
      save = (
        <Row justify='center'>
        <Col>
          <span style={{ padding: '0 5px' }}><Button type='primary' disabled={isSave}>บันทึก</Button></span>
        </Col>
      </Row>
      )
    }
    
  }

  const priceUnit = (unit, price) => {
    let total = unit * price
    return total
  }

  save = (
    <Row justify='center'>
    <Col>
      <span style={{ padding: '0 5px' }}><Button type='primary' disabled={!isSave}>บันทึก</Button></span>
    </Col>
  </Row>
  )

  if(isSave){
    save = (
      <Row justify='center'>
        <Col>
          <span style={{ padding: '0 5px' }}><Button type='primary'>บันทึก</Button></span>
        </Col>
      </Row>
    )
  }

  return (
    <div style={{ width: '840px', margin: 'auto' }}>
      <Row >
        <Col span={24} align='center'><Text>ใบรายการส่งซ่อม</Text></Col>
      </Row>
      <Row>
        <Col span={4} align='center'>ประเภท</Col>
        <Col span={10} align='center'>รายการ</Col>
        <Col span={4} align='center'>จำนวน</Col>
        <Col span={4} align='center'>ราคา</Col>
        <Col span={2} align='center'></Col>
      </Row>
      <Row>
        <Col span={4}>
          <Select style={{ width: '100%' }} defaultValue="เลือก" onChange={setSelectCode}>
            <Option value="1122">ค่าแรง</Option>
            <Option value="3322">ชิ้นส่วน</Option>
            <Option value="556">อะไหล่</Option>
          </Select>
        </Col>

        <Col span={10}>
          <Input type='text' value={inputList} onChange={(e) => setInputList(e.target.value)} placeholder='รายละเอียดสินค้า' />
        </Col>
        <Col span={4}>
          <Input type="number" style={{ textAlign: 'right' }} value={inputUnit} onChange={(e) => setInputUnit(e.target.value)} placeholder='0 ' />
        </Col>
        <Col span={4}>
          <Input type="number" style={{ textAlign: 'right' }} value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} placeholder='00.00 ' />
        </Col>
        <Col span={2}>
          <Row justify='center'>
            <Col ><Button type='primary' onClick={addItem}>เพิ่ม</Button></Col>
          </Row>
        </Col>
      </Row>
      <List
        style={{ width: '100%' }}
        header={
          <Row style={{ width: '100%' }}>
            <Col span={4} align='center'><Text >ประเภท</Text></Col>
            <Col span={8} align='center'><Text >รายการสินค้า</Text></Col>
            <Col span={3} align='right'><Text >จำนวน</Text></Col>
            <Col span={3} align='right'><Text >หน่วยละ</Text></Col>
            <Col span={3} align='right'>ราคา</Col>
            <Col span={3} ></Col>
          </Row>
        }
        // bordered
        dataSource={listTask}
        renderItem={item => (
          <List.Item>
            <Row style={{ width: '100%' }} justify='space-around' align='middle'>
              <Col span={4} align='center'>{item.code}</Col>
              <Col span={8}>{item.list}</Col>
              <Col span={3} align='right'>{item.unit}</Col>
              <Col span={3} align='right'>{item.price}</Col>
              <Col span={3} align='right'>{priceUnit(item.unit, item.price)}</Col>
              {/* <Col span={5} align='center'><Button type='danger' onClick={() => { deleteItem(item.id) }}>ลบ</Button></Col> */}
              <Col span={3} align='center'>
                <Button type='danger'>
                  <Popconfirm
                    title="คุณต้องการลบรายการนี้"
                    onConfirm={() => deleteItem(item.id)}
                    onCancel={() => console.log('Cancel')}
                    okText="ใช่"
                    cancelText="ไม่">
                    <a href="#" style={{ color: 'white' }}>ลบ</a>
                  </Popconfirm>
                </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
      <Divider />
      {save}
    </div>
  )
}
