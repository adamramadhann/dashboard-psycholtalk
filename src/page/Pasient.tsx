import { Table } from 'antd'
import React, { MouseEventHandler, useState } from 'react'
import ModalConfrimasi from '../components/ModalConfrimasi'

interface typeTable {
  key : React.Key,
  name : string,
  email : string,
  gender :string,
  bio : string,
  categories : string
  avatar : string,
}


const dataPasient : typeTable[] = [
  {
    key: '1',
    name: 'Adam Ramadhan',
    email: 'adam@example.com',
    gender: 'Male',
    bio: 'Seorang pasien dengan riwayat stres kerja.',
    categories: 'Dewasa',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    key: '2',
    name: 'Siti Aisyah',
    email: 'aisyah@example.com',
    gender: 'Female',
    bio: 'Memiliki gangguan kecemasan ringan.',
    categories: 'Remaja',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    key: '3',
    name: 'Budi Santoso',
    email: 'budi@example.com',
    gender: 'Male',
    bio: 'Pasien rutin untuk konsultasi mindfulness.',
    categories: 'Lansia',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    key: '4',
    name: 'Dewi Anggraini',
    email: 'dewi@example.com',
    gender: 'Female',
    bio: 'Sedang menjalani terapi perilaku kognitif.',
    categories: 'Dewasa',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
]

const Pasient = () => {

  const [isOpenModal, setIsOpenModal] = useState<boolean | false>(false)

  const handleOpenModal = () => {
    setIsOpenModal(val => !val)
  }


  const colums = [
    {
      key: 'no',
      title: 'No',
      render: (_: any, __: any, index: number) => index + 1,
      onCell: () => ({
        style: { border: '1px solid gray' },
      }),
    },
    {
      key: 'avatar',
      title: 'Avatar',
      render: (_: any, record: typeTable) => <img src={record.avatar} alt="avatar" width={40} />,
      onCell: () => ({
        style: { border: '1px solid gray' },
      }),
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      onCell: () => ({
        style: { border: '1px solid gray' },
      }),
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      onCell: () => ({
        style: { border: '1px solid gray' },
      }),
    },
    {
      key: 'gender',
      title: 'Gender',
      dataIndex: 'gender',
      onCell: () => ({
        style: { border: '1px solid gray' },
      }),
    },
    {
      key: 'bio',
      title: 'Bio',
      dataIndex: 'bio',
      onCell: () => ({
        style: { border: '1px solid gray' },
      }),
    },
    {
      key: 'categories',
      title: 'Categories',
      dataIndex: 'categories',
      onCell: () => ({
        style: { border: '1px solid gray' },
      }),
    },
    {
      key : "actions",
      title : "Actions",
      render : () => {
        return (
          <div className='w-full flex items-center gap-4' >
            <button className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md' >detail</button>
            <button onClick={handleOpenModal} className='bg-red-500 hover:bg-red-700 text-white p-2 rounded-md' >hapus</button>
          </div>
        )
      },
      onCell: () => ({
        style: { border: '1px solid gray' },
      }),
    }
  ]

  return (
    <div className='w-full space-y-5 h-full ' >
      <div className='float-right' >
        <div className='w-[250px] flex items-center rounded-md relative border' >
          <p className='absolute right-3' >icon</p>
          <input type="search" className='w-full p-1.5 rounded-md' />
        </div>
      </div>
      <Table
        className='custom-table w-full h-auto bg-white rounded-md'
        columns={colums}
        dataSource={dataPasient}
        pagination={{
          className: 'custom-pagination',
        }}
        bordered
      />
      <ModalConfrimasi 
        isClose={handleOpenModal} 
        isOpen={isOpenModal} 
        closed='Canseled'
        confrim='Deleted'
        textColor='text-red-500'
      />
    </div>
  )
}

export default Pasient