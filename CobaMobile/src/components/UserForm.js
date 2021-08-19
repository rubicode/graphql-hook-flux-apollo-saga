import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {TextInput, Button, View} from 'react-native';

import { addUser } from '../actions/users'

export default function UserForm({navigation}) {

    const initialUserState = {
        username: "",
        name: "",
        age: ""
    };

    const [user, setUser] = useState(initialUserState);

    const dispatch = useDispatch();

    const handleChangeUsername = value => {
        setUser({ ...user, username: value });
    };

    const handleChangeName = value => {
        setUser({ ...user, name: value });
    };

    const handleChangeAge = value => {
        setUser({ ...user, age: value });
    };

    const saveUser = () => {
        const { username, name, age } = user;

        dispatch(addUser(username, name, age))

        setUser(initialUserState)

        navigation.navigate('Home')
    }

    return (
        <View style={{ padding: 10, flex: 1 }}>
                <Button
                    title="Batal"
                    onPress={() => this.props.navigation.goBack()}
                />
                <TextInput style={{ height: 40 }} placeholder="Masukkan username" onChangeText={handleChangeUsername} />
                <TextInput style={{ height: 40 }} placeholder="Masukkan nama" onChangeText={handleChangeName} />
                <TextInput style={{ height: 40 }} placeholder="Masukkan umur" onChangeText={handleChangeAge} />
                <Button onPress={saveUser} title="Simpan" />
            </View>
    )

}