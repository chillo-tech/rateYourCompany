import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles, colors, container } from '../utils/data/styles'
import { Controller, useForm } from 'react-hook-form';
import { Ionicons, Entypo } from '@expo/vector-icons'; 

const SurveyScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  const onSubmit = data => console.log(data);
  return (
    <SafeAreaView style={appStyles.container}>
      
    <View
      style={[appStyles.fieldGroup]}>
      <Controller
        name="name"
        control={control}
        style={appStyles.fieldGroup}
        rules={{
        required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Nom'
            style={appStyles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      </View>
      {errors.name && <Text>This is required.</Text>}
      
      <View
        style={[appStyles.fieldGroup]}>
        <Controller
          name="email"
          control={control}
          style={appStyles.fieldGroup}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Email'
              style={appStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        </View>
        {errors.email && <Text>This is required.</Text>}
      
      <View
        style={[appStyles.fieldGroup]}>
        <Controller
          name="phone"
          control={control}
          style={appStyles.fieldGroup}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Téléphone'
              style={appStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        </View>
        {errors.phone && <Text>This is required.</Text>}
        <View
        style={[appStyles.fieldGroup]}>
        <Controller
          name="poste"
          control={control}
          style={appStyles.fieldGroup}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Poste'
              style={appStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        </View>
        {errors.name && <Text>This is required.</Text>}
      <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 30}}>
        <Entypo name="emoji-sad" size={60} color="#F51720" />
        <Entypo name="emoji-neutral" size={60} color="#E1C340" style={{marginHorizontal: 30}}/>
        <Entypo name="emoji-happy" size={60} color="#75E6DA" />
      </View>
      <TouchableOpacity
            style={
              [appStyles.defaultButton, 
              { backgroundColor: colors.warning, color: colors.white }
            ]}
            onPress={() => navigation.push('Survey')}
            activeOpacity={1}
          >
            <Text style={[appStyles.defaultButonText, {color: colors.white }]}>
              Participer au vote
            </Text>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SurveyScreen

const styles = StyleSheet.create({})