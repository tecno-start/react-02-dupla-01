import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { IoMdCreate } from "react-icons/io";

import {
    HOME, BUSCAR_SALA, CRIAR_SALA
} from '../routes/routes.js'

export const SidebarData = [
    {
        title: 'Home',
        path: HOME,
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Buscar Sala',
        path: BUSCAR_SALA,
        icon: <AiIcons.AiOutlineSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Criar Sala',
        path: CRIAR_SALA,
        icon: <IoMdCreate />,
        cName: 'nav-text'
    }
];