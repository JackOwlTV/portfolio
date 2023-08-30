import React from 'react'
import Card from './Card'
import { projectList } from '../utils/projectList'


export default function Gallery() {
    return (
        <div className='gallery'>
            {projectList.map((e) => (
                <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
            ))}
        </div>
    )
}
