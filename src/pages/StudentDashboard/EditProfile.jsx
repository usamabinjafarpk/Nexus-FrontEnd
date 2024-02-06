import React from 'react'

export default function EditProfile() {
  return (
    <div>
        <h1>Edit Profile</h1>
        <table>
            <tbody>
                <tr>
                    <td>Email:</td>
                    <td>
                        <input type='email'/>
                    </td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>
                        <input type='number'/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
