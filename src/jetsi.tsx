import { JitsiMeeting } from "@jitsi/react-native-sdk";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useRef } from "react";

export default function JitsiMeet({ route }) {
    const jitsiMeeting = useRef(null);
    const navigation = useNavigation();

    const { room } = route.params;

    const onReadyToClose = useCallback(() => {
        navigation.navigate('Home');
        jitsiMeeting.current.close();
    }, [navigation]);

    const eventListeners = {
        onReadyToClose
    };

    return (
        <JitsiMeeting
            eventListeners={eventListeners as any}
            ref={jitsiMeeting}
            style={{ flex: 1 }}
            room={room}
            serverURL={'https://meet.jit.si/'}
        />
    );
}