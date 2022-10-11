import styles from './index.module.css';
import { Avatar } from '../avatar';
import { Comentario } from '../comments';
import { format, formatDistanceToNow } from 'date-fns';
import PtBr from 'date-fns/locale/pt-BR';
import { useState, FormEvent, ChangeEvent } from "react";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: string
    content: string;

}

interface PostProps {
    author: Author;
    content: Content[];
    publishedAt: string;

}

export function Publication({ author, content, publishedAt }: PostProps) {
    const [comments, setComments] = useState(["Que legal, adorei sua postagem!"]);
    const [newComment, setNewComment] = useState('')



    function handleCreateNewComment(e: FormEvent) {
        e.preventDefault();
        setComments([...comments, newComment]);

        setNewComment('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewComment(event.target.value);
    }

    function deleteComment(commentToDelete: string) {
        console.log(commentToDelete)
        const newCommentListWithoutDelete = comments.filter((comment) => {
            return comment !== commentToDelete;
        });
        setComments(newCommentListWithoutDelete);
    }


    const publishDateFormatter = format(new Date(publishedAt), "d 'de' LLLL 'ás' HH:mm'h' ", {
        locale: PtBr
    });

    const publishDateRelativeToNow = formatDistanceToNow(
        new Date(publishedAt), {
        locale: PtBr,
        addSuffix: true
    })
    return (
        <aside className={styles.publication}>
            <div className={styles.superior}>
                <div className={styles.profile}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={styles.description}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <div className={styles.horario}>
                    <time title={publishDateFormatter} dateTime={new Date(publishedAt).toISOString()}></time>
                    Publicado {publishDateRelativeToNow}
                </div>

            </div>
            <div className={styles.feed}>
                <div className={styles.descriptionFeed}>
                    {content.map(line => {
                        switch (line.type) {
                            case 'paragraph':
                                return <p>{line.content}</p>
                            case 'link':
                                return <strong><a href={line.content}>{line.content}</a></strong>
                            default:
                                return ""
                        }
                    })}
                </div>
            </div>
            <div className={styles.publication1}>
                <form onSubmit={handleCreateNewComment}>
                    <strong>Deixe o seu feedback</strong>
                    <textarea name="comment" value={newComment} onChange={handleNewCommentChange} placeholder="Deixe um comentário" />
                    <button type="submit">Publicar</button>

                </form>
            </div>
            <div className={styles.comments}>
                <div className={styles.divFinal}>
                    {comments.map((comment) => {
                        return (<Comentario comentario={comment} nome={'Luis'} deleteComment={deleteComment} horario={'públicado há 2h'} src="https://github.com/iluiscarlos.png" />)

                    })}

                </div>

            </div>
        </aside>
    )
}
