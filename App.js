import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    // Layar penuh yang menengahkan kartu (REQ 3: Flexbox)
    <View style={styles.layar}>
      {/* Kartu utama */}
      <View style={styles.kartu}>
        {/* Foto profil: Lingkaran sempurna (REQ 2 & 3) */}
        <Image 
          source={{ uri: 'https://s3.amazonaws.com/assets.unprimdn.ac.id/images/students/72879/72879-medium.jpg' }} 
          style={styles.foto} 
        />

        {/* Nama dan Identitas (REQ 2) - Ganti dengan namamu */}
        <Text style={styles.nama}>GLADYS HUANG</Text>
        <Text style={styles.nim}>253303620001 · Sistem Informasi</Text>

        {/* Wadah lencana skill / hobi dengan 3 warna berbeda (REQ 2 & 3) */}
        <View style={styles.tagContainer}>
          <Text style={[styles.tag, styles.tagBiru]}>React Native</Text>
          <Text style={[styles.tag, styles.tagUngu]}>JavaScript</Text>
          <Text style={[styles.tag, styles.tagHijau]}>UI/UX Design</Text>
        </View>

        {/* Motto Hidup (REQ 2) */}
        <Text style={styles.quote}>"Stay humble."</Text>

        {/* Bonus Challenge: Tombol Interaktif (REQ 4) */}
        <Pressable 
          style={styles.tombol} 
          onPress={() => alert('Terima kasih sudah berkunjung!')}
        >
          <Text style={styles.teksTombol}>Hubungi Saya</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layar: {
    flex: 1,                      
    backgroundColor: '#f1f5f9',   
    alignItems: 'center',         
    justifyContent: 'center',     
    padding: 20,
  },
  kartu: {
    backgroundColor: '#ffffff',   
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    width: '100%',
    // Efek bayangan (Elevation untuk Android, Shadow untuk iOS)
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,             // Setengah dari width/height agar jadi lingkaran
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#3b82f6',       
  },
  nama: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#1e3a5f', 
    marginBottom: 4 
  },
  nim: { 
    fontSize: 13, 
    color: '#6b7280', 
    marginBottom: 16 
  },
  tagContainer: {
    flexDirection: 'row',         
    flexWrap: 'wrap',             
    gap: 8,
    justifyContent: 'center',
    marginBottom: 16,
  },
  tag: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    overflow: 'hidden',
  },
  tagBiru: { backgroundColor: '#3b82f6' },
  tagUngu: { backgroundColor: '#8b5cf6' },
  tagHijau: { backgroundColor: '#10b981' }, 
  quote: { 
    fontSize: 13, 
    color: '#9ca3af', 
    fontStyle: 'italic', 
    textAlign: 'center', 
    marginBottom: 20 
  },
  tombol: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  teksTombol: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});