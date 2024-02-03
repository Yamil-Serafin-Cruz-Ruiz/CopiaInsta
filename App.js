import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Buscar />
      <Contactos />
      <ScrollView style={styles.chatContainer}>
        <Mensaje useravatar={require('./assets/perfil-4.jpg')} username="asissec" date="23 días" text="Tú: Hola" />
        <Mensaje useravatar={require('./assets/perfil-5.jpg')} username="ElPapis" date="14 días" text="Hola, ¿cómo estás?" />
        <Mensaje useravatar={require('./assets/perfil-6.jpg')} username="DIIIVIL" date="2 días" text="Hola, ¿cómo estás?" />
        <Mensaje useravatar={require('./assets/perfil-7.jpg')} username="Kalusha" date="8 días" text="Tú: Feliz Cumpleaños" />
        <Mensaje useravatar={require('./assets/perfil-8.webp')} username="RandyAg" date="9 días" text="Pasa la tarea" />
        <Mensaje useravatar={require('./assets/perfil-9.webp')} username="DuckFat" date="20 días" text="Hola" />
      </ScrollView>
      <PiePagina />
      <StatusBar style="auto" />
    </View>
  );
}

const Encabezado = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Mensajes</Text>
      <View style={styles.btnAddFriends}>
        <Text style={styles.btnAddFriendsText}><Ionicons name="person-add" size={24} color="#bcb6b6"/> Añadir amigos</Text>
      </View>
    </View>
  );
}

const Buscar = () => {
  return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchText}><Ionicons name="search" size={24} color="#bcb6b6"/>  Buscar</Text>
    </View>
  )
}

const Contactos = () => {
  return (
    <View style={styles.contactConteiner}>
      <View style={styles.contact}>
        <Image style={styles.contactAvatar} source={require('./assets/perfil-1.jpg')}></Image>

      </View>

      <View style={styles.contact}>
        <Image style={styles.contactAvatar} source={require('./assets/perfil-2.jpg')}></Image>

      </View>

      <View style={styles.contact}>
        <Image style={styles.contactAvatar} source={require('./assets/perfil-3.jpg')}></Image>

      </View>
    </View>
  )
}

const Mensaje = ({ useravatar, username, date, text }) => {
  return (
    <View style={styles.message}>

      <View style={styles.userAvatar}>
        <Image style={styles.userAvatar} source={require = (useravatar)} />
      </View>

      <View style={styles.messageContent}>

        <View style={styles.messageContentInf}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.text}>{text}</Text>

      </View>

    </View>
  );
}

const PiePagina = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.servidores}>
        <Ionicons name="server" size={24} color="#bcb6b6"/>
        <Text style={styles.textFooter}>Servidores</Text>
      </View>
      <View style={styles.mens}>
      <Ionicons name="chatbubble" size={24} color="#bcb6b6"/>
        <Text style={styles.textFooter}>Mensajes</Text>
      </View>
      <View style={styles.notificaciones}>
      <Ionicons name="notifications-sharp" size={24} color="#bcb6b6"/>
        <Text style={styles.textFooter}>Notificaciones</Text>
      </View>
      <View style={styles.you}>
      <Ionicons name="person-sharp" size={24} color="#bcb6b6"/>
        <Text style={styles.textFooter}>Tú</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(35, 39, 42)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  btnAddFriends: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#66456d79',
  },
  btnAddFriendsText: {
    color: '#ffffffb3',
    fontSize: 16,
    fontWeight: 'bold'
  },
  searchContainer: {
    width: '90%',
    margin: 20,
    backgroundColor: '#3b3939',
    borderRadius: 25,
    padding: 20,
    flexDirection: 'row',
    alignItems: '',
  },
  searchText: {
    color: '#ffffff63',
    fontSize: 16,
  },
  contactConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  contact: {
    height: 100,
    width: 100,
    backgroundColor: '#66456d79',
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  chatContainer: {
    flex: 1,
    width: '100%',
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  userAvatar: {
    backgroundColor: '#3b3939',
    marginRight: 10,
    borderRadius: 30,
    height: 40,
    width: 40,
  },
  contactAvatar: {
    backgroundColor: '#3b3939',
    marginBottom: 5,
    borderRadius: 30,
    height: 50,
    width: 50,
  },
  messageContent: {
    flex: 1,
  },
  messageContentInf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    color: '#6f6d6d',
    fontSize: 16,
    fontWeight: 'bold'
  },
  date: {
    color: '#6f6d6d',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  textFooter: {
    color: '#6e6c6c',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    width: '100%',
    backgroundColor: 'rgb(28, 31, 33)',
  },
  servidores: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  mens: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  notificaciones: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  you: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

