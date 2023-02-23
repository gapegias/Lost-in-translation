import './ProfileComponents.css';

const ProfileHeader = ({ username }) => {
  return (
    <>
      <span className='ProfileComponents'>
        <div>
          <table style={{marginLeft:'auto', marginRight: 'auto'}}>
              <tbody>
                <tr>
                  <td>
                     <img src='/Images/Logo-Hello.png' alt="robotLogo-Hello.png" />
                  </td>
                  <td>
                     <label>{ username }</label>
                   </td>
                </tr> 
              </tbody>
          </table>
        </div>
      </span>
    </>
  )
}

export default ProfileHeader