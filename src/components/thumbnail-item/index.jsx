import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'
export const ThumbnailItem = ({ node }) => {
  let date = node.frontmatter.date
  let year = date.slice(-4)
  let month = date.slice(0, date.indexOf(' '))
  let monthChange = {
    January: '01월',
    February: '02월',
    March: '03월',
    April: '04월',
    May: '05월',
    June: '06월',
    July: '07월',
    August: '08월',
    September: '09월',
    October: '10월',
    November: '11월',
    December: '12월',
  }
  let day = date.slice(date.indexOf(' ') + 1, date.indexOf(' ') + 3)
  return (
    <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
      <div key={node.fields.slug}>
        <div className="titleBox">
          <h3>{node.frontmatter.title || node.fields.slug}</h3>
          <div className="dataBox">
            <h3>{node.frontmatter.category}</h3>
            <h3>{`${year}년${monthChange[month]}${day}일`}</h3>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    </Link>
  )
}
