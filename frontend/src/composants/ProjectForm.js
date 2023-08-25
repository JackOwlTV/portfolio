import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useFilePreview } from '../composants/lib/customHook';
import { updateProject, addProject } from '../composants/lib/common';
import addFileIMG from '../images/add_file.png'

export default function ProjectForm({ project, validate }) {

    const navigate = useNavigate();

    const {
        register, watch, formState, handleSubmit, reset,
    } = useForm({
        defaultValues: useMemo(() => ({
            title: project?.title,
            description: project?.description,
            link: project?.link,
            githublink: project?.githublink,
            html: project?.html,
            css: project?.css,
            react: project?.react,
            js: project?.js,
        }), [project]),
    })
    useEffect(() => {
        reset(project);
    }, [project]);

    const file = watch(['file']);
    const [filePreview] = useFilePreview(file);

    const onSubmit = async (data) => {
        // When we create a new book
        if (!project) {
            if (!data.file[0]) {
                alert('Vous devez ajouter une image');
            }
            const newProject = await addProject(data);
            if (!newProject.error) {
                validate(true);
            } else {
                alert(newProject.message);
            }
        } else {
            const updateProject = await updateProject(data, data.id);
            if (!updateProject.error) {
                navigate('/project');
            } else {
                alert(updateProject.message);
            }
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" id='id' {...register('id')} />
            <label htmlFor="title">
                <p>Titre du projet</p>
                <input type="text" id='title' {...register('title')} />
            </label>
            <label htmlFor="description">
                <p>Description</p>
                <input type="text" id='description' {...register('description')} />
            </label>
            <label htmlFor="link">
                <p>Lien du projet</p>
                <input type="url" id='link' {...register('link')} />
            </label>
            <label htmlFor="githublink">
                <p>Lien du git</p>
                <input type="url" id='githublink' {...register('githublink')} />
            </label>
            <label htmlFor="html">
                <p>HTML</p>
                <input type="checkbox" id='html' {...register('html')} />
            </label>
            <label htmlFor="css">
                <p>CSS</p>
                <input type="checkbox" id='css' {...register('css')} />
            </label>
            <label htmlFor="react">
                <p>React</p>
                <input type="checkbox" id='react' {...register('react')} />
            </label>
            <label htmlFor="js">
                <p>JavaScript</p>
                <input type="checkbox" id='js' {...register('js')} />
            </label>

            <label htmlFor="file">
                <p>Visuel</p>
                <div>
                    {filePreview || project?.pictures ? (
                        <>
                            <img src={filePreview ?? project?.pictures} alt="preview" />
                            <p>Modifier</p>
                        </>
                    ) : (
                        <>
                            <img src={addFileIMG} alt="Add file" />
                            <p>Ajouter une image</p>
                        </>
                    )}
                </div>
                <input {...register('file')} type="file" id='file' />
            </label>
            <button type='submit'>Publier</button>
        </form>
    );
}


ProjectForm.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string,
        _id: PropTypes.string,
        userId: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
        githublink: PropTypes.string,
        html: PropTypes.bool,
        css: PropTypes.bool,
        react: PropTypes.bool,
        js: PropTypes.bool,
    }),
    validate: PropTypes.func,
};


ProjectForm.defaultProps = {
    project: null,
    validate: null,
};