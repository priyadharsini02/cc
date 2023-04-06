import React from 'react'

export default function Singers() {
  return (
    <div id='Singers'>
      <table style={{width:"30%" ,marginLeft:"32rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Miley Cyrus</td>
            <td>2023</td>
          </tr>
          <tr>
            <td scope='row'>Zendaya</td>
            <td>2013</td>
          </tr>
          <tr>
            <td scope='row'>Mark Ronson ft. Bruno Mars</td>
            <td>2015</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}