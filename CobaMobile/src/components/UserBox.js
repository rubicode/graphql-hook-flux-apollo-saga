import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import UserList from "./UserList";

export default function UserBox(props) {
    return (
        <View style={styles.UserBox}>
            <Text style={styles.headerBox}>Daftar User</Text>
            <UserList />
            <TouchableOpacity onPress={() => props.navigation.navigate('Add')}>
                <Text>Tambah User</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    UserBox: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 20,
        margin: 4,
        borderColor: "grey",
        backgroundColor: "white"
    },
    headerBox: {
        fontSize: 20,
        color: "brown"
    }
});