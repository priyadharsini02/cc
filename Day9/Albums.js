import React from 'react'

export default function Albums() {
  return (
    <div>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Albums</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Miley Cyrus</td>
            <td>Flowers</td>
          </tr>
          <tr>
            <td scope='row'>Zendaya</td>
            <td>Replay</td>
          </tr>
          <tr>
            <td scope='row'>Mark Ronson</td>
            <td>Uptown Funk</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}