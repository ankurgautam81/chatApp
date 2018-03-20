import MyChats from '../screens/MyChats'
import Featured from '../screens/Featured'
import Groups from '../screens/Groups'

export default  tabNav = {
    Groups:{screen: Groups},
    MyChats: { screen: MyChats,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#AF7AC5',
            },
            headerTitleStyle: {
                color: 'white',
            },
            headerBackTitleStyle: {
                color: 'white',
            },
            headerTintColor: 'white',
            title: "MY CHATS",
        },},
    Featured: { screen: Featured },


}