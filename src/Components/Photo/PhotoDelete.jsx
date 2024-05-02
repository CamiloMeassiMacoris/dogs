import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../Api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  async function handleDelete() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }
  return (
    <>
      {loading ? (
        <button onClick={handleDelete} className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button onClick={handleDelete} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
