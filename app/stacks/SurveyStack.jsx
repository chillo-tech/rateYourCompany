import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SurveyScreen from '../screens/SurveyScreen'
import ResultsScreen from '../screens/ResultsScreen'
import { colors } from '../utils/data/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const SurveyStack = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: colors.white
      },
      headerTitleStyle: {
        fontWeight: '100',
        color: colors.warning,
        fontSize: 30
      },
      tabBarActiveTintColor: colors.warning,
      tabBarInactiveTintColor: 'gray',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'SurveyScreen') {
          iconName = focused
            ? 'ios-star'
            : 'ios-star-outline';
        } else {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={focused ? colors.warning: 'gray'} />;
      },
    })}>
      <Tab.Screen 
          name="SurveyScreen" 
          component={SurveyScreen} 
          options={{
            title: 'Participer'
          }}
        />
        <Tab.Screen name="ResultsScreen" 
          options={{
            title: 'Resultats'
          }}
        component={ResultsScreen} />
    </Tab.Navigator>
  )
}

export default SurveyStack

const styles = StyleSheet.create({})