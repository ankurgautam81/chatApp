import Login from '../screens/Login'
import Home from '../screens/Home'
export default routes ={
        Home: {
            screen: Home,
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
                title: "triosChat",
            },
        },
        Login: { screen: Login },
}

