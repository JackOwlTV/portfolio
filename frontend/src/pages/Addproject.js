import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { updateProject, addProject } from '../composants/lib/common';
import { APP_ROUTES } from '../utils/constants';
import { useUser } from '../composants/lib/customHook';
import ProjectForm from '../composants/ProjectForm';
import styles from '../styles/page/project.module.css'


export default function Addproject() {

    const navigate = useNavigate();
    const { connectedUser, auth, userLoading } = useUser();
    const [created, setCreated] = useState(false);
    useEffect(() => {
        if (!userLoading) {
            if (!connectedUser || !auth) {
                navigate(APP_ROUTES.SIGN_IN);
            }
        }
    }, [userLoading]);

    return (
        <div className="content-container">
            <div className={styles.Container}>
                {!created ? (
                    <>
                        <h1>Ajouter un livre</h1>
                        <p>tous les champs sont obligatoires</p>
                        <ProjectForm validate={setCreated} />
                    </>
                ) : (
                    <div className={styles.Created}>
                        <h1>Merci!</h1>
                        <p>votre livre a bien été publié</p>
                        <img src="" alt="Livre ajouté" />
                        <Link to="/" className="button">Retour à l&apos;accueil</Link>
                    </div>

                )}

            </div>
        </div>
    );
}
