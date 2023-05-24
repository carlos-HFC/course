import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, Text, Switch, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';

const GRADE = [
  {
    value: "Ensino Médio",
    text: "Ensino Médio"
  },
  {
    value: "Ensino Superior",
    text: "Ensino Superior",
  },
  {
    value: "Mestrado",
    text: "Mestrado",
  },
  {
    value: "Doutorado",
    text: "Doutorado",
  },
  {
    value: "Profissionalizante",
    text: "Profissionalizante",
  },
  {
    value: "Técnico",
    text: "Técnico",
  },
];

const INITIAL_STATE = {
  name: "",
  city: "",
  grade: "",
  experience: 0,
  recommended: false,
};

export function Form() {
  const [isShowResult, setIsShowResult] = useState(false);
  const [data, setData] = useState(INITIAL_STATE);

  const showResult = () => setIsShowResult(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gostaria de receber novidades do curso?</Text>
      </View>

      <View style={styles.fields}>
        <Text style={styles.fieldsLabel}>Nome</Text>
        <TextInput style={styles.fieldsInput}
          value={data.name} onChangeText={name => setData(prev => ({ ...prev, name }))} />
      </View>
      <View style={styles.fields}>
        <Text style={styles.fieldsLabel}>Cidade</Text>
        <TextInput style={styles.fieldsInput}
          value={data.city} onChangeText={city => setData(prev => ({ ...prev, city }))} />
      </View>

      <View style={styles.fields}>
        <Text style={styles.fieldsLabel}>Escolaridade</Text>
        <Picker style={styles.fieldsInput}
          selectedValue={data.grade} onValueChange={grade => setData(prev => ({ ...prev, grade }))}>
          {GRADE.map((grade, i) => (
            <Picker.Item key={i} value={grade.value} label={grade.text} />
          ))}
        </Picker>
      </View>

      <View style={styles.fields}>
        <Text style={styles.fieldsLabel}>Tempo de Experiência (em anos): {String(data.experience).padStart(2, '0')}</Text>
        <Slider minimumValue={0} maximumValue={10} step={1}
          thumbTintColor="#835dcf" minimumTrackTintColor="#835dcf"
          value={data.experience} onValueChange={experience => setData(prev => ({ ...prev, experience }))} />
      </View>

      <View style={styles.fields}>
        <Text style={styles.fieldsLabel}>Você recomendaria este curso?</Text>
        <Switch
          thumbColor={data.recommended ? "#613baf" : "#aaa"} trackColor={{ false: "#ccc", true: "#835dcf" }} value={data.recommended} onValueChange={recommended => setData(prev => ({ ...prev, recommended }))} />
      </View>

      <View style={styles.action}>
        <TouchableOpacity style={styles.actionButton} onPress={showResult}>
          <Text style={styles.actionText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      {isShowResult && (
        <View style={styles.result}>
          <View style={styles.resultHeader}>
            <Text style={styles.resultTitle}>Dados informados:</Text>
          </View>

          <View style={styles.resultInfo}>
            <Text style={styles.resultInfoTitle}>Nome: </Text>
            <Text style={styles.resultInfoText}>{data.name}</Text>
          </View>

          <View style={styles.resultInfo}>
            <Text style={styles.resultInfoTitle}>Cidade: </Text>
            <Text style={styles.resultInfoText}>{data.city}</Text>
          </View>

          <View style={styles.resultInfo}>
            <Text style={styles.resultInfoTitle}>Escolaridade: </Text>
            <Text style={styles.resultInfoText}>{data.grade}</Text>
          </View>

          <View style={styles.resultInfo}>
            <Text style={styles.resultInfoTitle}>Experiência: </Text>
            <Text style={styles.resultInfoText}>{String(data.experience).padStart(2, '0')} anos</Text>
          </View>

          <View style={styles.resultInfo}>
            <Text style={styles.resultInfoTitle}>Você recomendaria este curso: </Text>
            <Text style={styles.resultInfoText}>{data.recommended ? "Sim" : "Não"}</Text>
          </View>
        </View>
      )}
    </View>
  );
}