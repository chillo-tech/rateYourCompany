import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../utils/data/styles";
import { useAppContext } from "./../utils/data/AppContext";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const { errorG, setErrorG } = React.useState(null);
    const {
        control,
        handleSubmit
    } = useForm();
    const { value, setValue } = useAppContext();
    const navigation = useNavigation();
    const { signIn } = useAppContext();

    const onSubmit = async data => {
        const user = {
            "id": 0,
            "name": "Janet Benton",
            "email": "janetbenton@isotronic.com",
            "phone": "+1 (839) 599-2393",
            "job": 41,
            "satisfaction": 3,
            "token": "sdsfsdfdfdsddsdderrr"
        }
        signIn(user);
    };

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={{ marginBottom: 20, flexDirection: "row", justifyContent: "center", textTransform: "capitalize" }}>
                <Text style={{ color: colors.warning, fontSize: 40 }}>Connexion</Text>
            </View>
            {errorG && (
                <View>
                    <Text style={[styles.textError]}>{JSON.stringify(errorG)} ere</Text>
                </View>
            )}
            <Controller
                name="email"
                control={control}
                rules={{ required: "email is required" }}
                render={({
                    field: { value, onBlur, onChange },
                    fieldState: { error },
                }) => (
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            style={[styles.input, { borderColor: error ? colors.danger : colors.lightgray, borderWidth: 2, borderStyle: "solid" }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Email"
                        />
                        {error && <Text style={[styles.textError]}>{error.message}</Text>}
                    </View>
                )}
            />
            <Controller
                name="password"
                control={control}
                rules={{ required: "password is required", minLength: { value: 5, message: "password should be atleast 5 characters" } }}
                render={({
                    field: { value, onBlur, onChange },
                    fieldState: { error },
                }) => (
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            style={[styles.input, { borderColor: error ? colors.danger : colors.lightgray, borderWidth: 2, borderStyle: "solid" }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Mot de passe"
                            secureTextEntry
                        />
                        {error && <Text style={[styles.textError]}>{error.message}</Text>}
                    </View>
                )}
            />
            <Button
                onPress={handleSubmit(onSubmit)}
                title="Log In"
                color={colors.warning}
            />
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 2,
        alignSelf: "stretch",
        borderColor: colors.coffeePot
    },
    textError: {
        color: colors.danger,
        fontSize: 10
    },
});
