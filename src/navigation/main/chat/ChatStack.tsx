import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatRoomListScreen } from "../screens/ChatRoomListScreen/ChatRoomListScreen";
import { ChatStackParamList } from "../types/navigation";
import { ChatRoomScreen } from "../screens/ChatRoomScreen/ChatRoomScreen";

const Stack = createNativeStackNavigator<ChatStackParamList>();


export default function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ChatRoomList"
                component={ChatRoomListScreen} />

            <Stack.Screen
                name="ChatRoom">
                {(props) =>(
                    <ChatRoomScreen
                    {...props}
                    roomId = {props.route.params.roomId}
                    onBack={ () => props.navigation.goBack()}
                    ></ChatRoomScreen>
                )

                }

            </Stack.Screen>
        </Stack.Navigator>
    )
}