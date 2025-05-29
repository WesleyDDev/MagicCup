import React, { useState } from 'react';
import axios from 'axios';

const BuscarCartaMTG = () => {
  const [nomeCarta, setNomeCarta] = useState('');
  const [carta, setCarta] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarCarta = () => {
    if (!nomeCarta.trim()) return;

    setCarregando(true);
    setErro(null);
    setCarta(null);

    axios.get('https://api.magicthegathering.io/v1/cards', {
      params: { name: nomeCarta }
    })
    .then(res => {
      const resultado = res.data.cards[0];
      if (resultado) {
        setCarta(resultado);
      } else {
        setErro('Carta não encontrada.');
      }
    })
    .catch(err => {
      setErro('Erro ao buscar carta: ' + err.message);
    })
    .finally(() => {
      setCarregando(false);
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Buscar Carta do MTG</h1>
      <input
        type="text"
        placeholder="Nome da carta"
        value={nomeCarta}
        onChange={(e) => setNomeCarta(e.target.value)}
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button onClick={buscarCarta} style={{ padding: '8px 12px' }}>
        Buscar
      </button>

      {carregando && <p>🔄 Buscando...</p>}
      {erro && <p style={{ color: 'red' }}>⚠️ {erro}</p>}

      {carta && (
        <div style={{ marginTop: '20px' }}>
          <h2>{carta.name}</h2>
          <p><strong>Tipo:</strong> {carta.type}</p>
          <p><strong>Texto:</strong> {carta.text || 'Sem texto'}</p>
          {carta.imageUrl && <img src={carta.imageUrl} alt={carta.name} style={{ maxWidth: '300px' }} />}
        </div>
      )}
    </div>
  );
};

export default BuscarCartaMTG;
