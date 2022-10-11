import styles from './index.module.css';
import { Avatar } from '../avatar';
import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react";


interface CommentsProps {
    comentario: string;
    nome: string;
    horario: string;
    src: string;
    deleteComment: (comentario: string) => void;
}



export function Comentario({ comentario, nome, horario, src, deleteComment }: CommentsProps) {
    console.log(comentario)

    const [likes, setLikes] = useState(0)

    function getLikes() {
        setLikes(likes + 1)
    }
    function handleDeleteComment() {
        deleteComment(comentario)
    }

    return (
        <div>
            <div className={styles.profile}>
                <Avatar hasBorder={false} src={src} />

                <div className={styles.comentario}>
                    <div className={styles.name}>
                        <div className={styles.superior}>

                            <strong>{nome}</strong>

                            <Trash size={24} onClick={handleDeleteComment} />
                        </div>
                        <p className={styles.horario}>{horario}</p>
                    </div>
                    <p>{comentario}</p>

                </div>
            </div>
            <div >
                <button className={styles.sLikes}>
                    <ThumbsUp onClick={getLikes} size={20} />
                    <strong >{likes}</strong>
                </button>

            </div>
        </div>
    )
}