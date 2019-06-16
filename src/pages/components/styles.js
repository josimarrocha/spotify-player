import styled from 'styled-components'

export const SingItem = styled.div`
  display: flex;
  width:100%;
  max-width: 400px;
  transition: all .3s ease;
  margin-bottom: 10px;
  align-items: center;
  color: #252525;
  cursor:pointer;

  &:hover{
    background-color: #ccc
  }
  .SongItem-photo img{
    width: 100px;
    height: auto;
  }
  .SongItem-info {
    margin-left: 10px;
  }

  .SongItem-info h2{
    font-size:1.2em;
    margin: 0;
  }
  .SongItem-info h3{
    font-size:1em;
    margin-bottom:0;
  }
`