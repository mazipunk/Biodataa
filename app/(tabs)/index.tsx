import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

const App: React.FC = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (todoInput.trim() !== "") {
      setTodoList([...todoList, todoInput]);
      setTodoInput("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 30,
        backgroundColor: "#e3f2fd", // background biru muda
      }}
    >
      {/* Judul */}
      <Text
        style={{
          fontSize: 24,
          color: "#2196F3",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        WELCOME TO YOUR TODO LIST
      </Text>

      <TextInput
        style={{
          borderColor: "#2196F3",
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          backgroundColor: "transparent",
          color: "#2196F3",
          borderRadius: 10,
        }}
        placeholder="Tambah tugas baru..."
        placeholderTextColor="#90CAF9"
        value={todoInput}
        onChangeText={setTodoInput}
      />

      <View style={{ borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
        <Button title="Tambahkan" onPress={handleAddTodo} color="#2196F3" />
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
              borderBottomColor: "#2196F3",
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{
                color: "#2196F3",
                fontSize: 16,
                flex: 1,
                marginRight: 10,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item}
            </Text>
            <TouchableOpacity onPress={() => handleDeleteTodo(index)}>
              <Text style={{ color: "#0D47A1" }}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default App;