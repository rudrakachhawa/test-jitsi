import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function Home() {
    const navigation = useNavigation();
    const [room, onChangeRoom] = useState('');
    console.log("inside home");

    return (
        <View style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center'
        }}>
            <TextInput
                onChangeText={onChangeRoom}
                placeholder="Room Name De Bhai"
                placeholderTextColor={'black'}
                style={{ color: 'black', padding: 32 }}
                value={room} />
            <Button
                color="blue"
                disabled={!room}
                onPress={() => navigation.navigate('Jitsi', { room })}
                style={{ height: 32, width: 32 }}
                title="Join" />
        </View>
    );
}