import React, { useState } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import MainButton from '../components/MainButton';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

function Item({title}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}  


export default function MainScreen(props) {
    const [toDoList, setToDoList] = useState([]);
    const title = props.navigation.getParam('title');
    const [itemAddedStatus, setItemAddedStatus] = useState(false);

    const toDoListFromStore = [...useSelector(state => state.toDo.ToDoList)].reverse();

    if (!itemAddedStatus) {
        setToDoList([...toDoList, title]);
        setItemAddedStatus(true);
    }

    const onPressHandler = () => {
        props.navigation.navigate('AddItem');
    }

    return (
        <View style={styles.screen}>
            <MainButton onPress={onPressHandler} style={styles.button}>
                ADD
            </MainButton>
            <View style={styles.listContainer}>
                <FlatList
                    data={ toDoListFromStore }
                    renderItem={({ item }) => <Item title={item} />}
                    keyExtractor={item => Math.random(1,100) + item}
                    contentContainerStyle={styles.list}
                />
            </View>
            <MainButton
                onPress={onPressHandler} 
                style={{width: "50%"}} 
                onPress={() => { BackHandler.exitApp() }}
                style={styles.button}
            >
                EXIT
            </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
        marginTop: "5%"
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginTop: '5%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    listContainer: {
        flex: 1,
        width: '90%',
        alignSelf: "center",
        height: '70%',
        paddingVertical: 15
    },
    title: {
        fontFamily: 'lato'
    },
    button: {
        width: "50%",
        alignSelf: "center"
    }
});
