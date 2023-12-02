import React from 'react'

const Profile = (params) => {
    const {profile} = params
    if (!profile) {
        return (
            <>no data</>
        )
    }
    const editable = profile.id == JSON.parse(localStorage.getItem("user")!).id
    console.log(editable);
    if (editable){
        return (
            <div>
                <h1>Профиль</h1>
                <p>Имя: {profile.firstName}</p>
                <p>Фамилия: {profile.lastName}</p>
                <p>Отчество: {profile.patronymic}</p>
                <p>Номер телефона: {profile.phoneNumber}</p>
                <p>Группа: {profile.groupCode}</p>
                <p>Дата рождения: {profile.birthDate}</p>
            </div>
    )}else{
        return (
            <>no access</>
        )
    }
  
}

export default Profile