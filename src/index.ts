import { TranslationMessages } from 'ra-core';

const portugueseMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Adicionar filtro',
            add: 'Adicionar',
            back: 'Voltar',
            bulk_actions: '1 item selecionado |||| %{smart_count} items selecionados',
            cancel: 'Cancelar',
            clear_input_value: 'Limpar campo',
            clone: 'Clonar',
            confirm: 'Confirmar',
            create: 'Criar',
            create_item: 'Criar %{item}',
            delete: 'Deletar',
            edit: 'Editar',
            export: 'Exportar',
            list: 'Listar',
            refresh: 'Atualizar',
            remove_filter: 'Remover este filtro',
            remove_all_filters: 'Remover todos os filtros',
            remove: 'Remover',
            save: 'Salvar',
            search: 'Buscar',
            select_all: 'Selecionar tudo',
            select_row: 'Selecionar essa linha',
            show: 'Mostrar',
            sort: 'Ordenar',
            undo: 'Desfazer',
            unselect: 'Cancelar a seleção',
            expand: 'Expandir',
            close: 'Fechar',
            open_menu: 'Abrir menu',
            close_menu: 'Fechar menu',
            update: 'Atualizar',
            move_up: 'Mover acima',
            move_down: 'Mover abaixo',
            open: 'Abrir',
            toggle_theme: 'Alternar tema',
        },
        boolean: {
            true: 'Sim',
            false: 'Não',
            null: ' ',
        },
        page: {
            create: 'Criar %{name}',
            dashboard: 'Painel',
            edit: '%{name} %{recordRepresentation}',
            error: 'Ocorreu um problema',
            list: '%{name}',
            loading: 'Carregando',
            not_found: 'Não encontrado',
            show: '%{name} %{recordRepresentation}',
            empty: 'Nenhum %{name} disponível ainda.',
            invite: 'Deseja criar um novo?',
        },
        input: {
            file: {
                upload_several:
                    'Solte alguns arquivos para upload, ou clique para selecionar um.',
                upload_single:
                    'Solte um arquivo para upload, ou clique para selecioná-lo.',
            },
            image: {
                upload_several:
                    'Solte algumas fotos para fazer upload, ou clique para selecionar uma.',
                upload_single:
                    'Solte uma foto para fazer upload, ou clique para selecioná-la.',
            },
            references: {
                all_missing: 'Não foi possível encontrar dados de referência.',
                many_missing:
                    'Pelo menos uma das referências associadas não parece mais estar disponível.',
                single_missing:
                    'A referência associada não parece mais estar disponível.',
            },
            password: {
                toggle_visible: 'Esconder senha',
                toggle_hidden: 'Mostrar senha',
            },
        },
        message: {
            about: 'Sobre',
            are_you_sure: 'Tem certeza?',
            bulk_delete_content:
                'Tem certeza que deseja excluir este %{name}? |||| Tem certeza que deseja excluir estes %{smart_count} itens?',
            bulk_delete_title:
                'Excluir %{name} |||| Excluir %{smart_count} %{name}',
            bulk_update_content:
                'Tem certeza que deseja atualizar este %{name}? |||| Tem certeza que deseja atualizar estes %{smart_count} itens?',
            bulk_update_title:
                'Atualizar %{name} |||| Atualizar %{smart_count} %{name}',
            delete_content: 'Tem certeza que deseja excluir este item?',
            delete_title: 'Excluir %{name} #%{id}',
            details: 'Detalhes',
            error:
                "A client error occurred and your request couldn't be completed.",
            invalid_form: 'O formulário não é válido. Verifique se há erros',
            loading: 'A página está carregando, um momento por favor',
            no: 'Não',
            not_found:
                'Ou você digitou um URL errado, ou seguiu um link incorreto.',
            yes: 'Sim',
            unsaved_changes:
                "Algumas alterações não foram salvas. Tem certeza que deseja descartá-las?",
        },
        navigation: {
            no_results: 'Nenhum resultado encontrado',
            no_more_results:
                'The page number %{page} is out of boundaries. Tente a página anterior.',
            page_out_of_boundaries: 'Número de página %{page} está fora dos limites',
            page_out_from_end: 'Não é possível ir após a última página',
            page_out_from_begin: 'Não é possível ir antes da primeira página',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} de mais de %{offsetEnd}',
            current_page: 'Página %{page}',
            page: 'Ir para a página %{page}',
            first: 'Ir para a primeira página',
            last: 'Ir para a última página',
            next: 'Ir para a próxima página',
            previous: 'Ir para a página anterior',
            page_rows_per_page: 'Linhas por página:',
            skip_nav: 'Pular para o conteúdo',
        },
        sort: {
            sort_by: 'Ordenar por %{field} %{order}',
            ASC: 'crescente',
            DESC: 'decrescente',
        },
        auth: {
            auth_check_error: 'Por favor, faça o login para continuar',
            user_menu: 'Perfil',
            username: 'Usuário',
            password: 'Senha',
            sign_in: 'Entrar',
            sign_in_error: 'Erro de autenticação, por favor tente novamente',
            logout: 'Sair',
        },
        notification: {
            updated: 'Elemento atualizado |||| %{smart_count} elementos atualizados',
            created: 'Elemento criado',
            deleted: 'Elemento deletado |||| %{smart_count} elementos deletados',
            bad_item: 'Elemento incorreto',
            item_doesnt_exist: 'Elemento não existe',
            http_error: 'Erro na comunicação com o servidor',
            data_provider_error:
                'Erro na provisão dos dados. Verifique o console para mais detalhes.',
            i18n_error:
                'Não foi possível carregar as traduções para o idioma escolhido',
            canceled: 'Ação cancelada',
            logged_out: 'Sessão encerrada, por favor reconecte.',
            not_authorized: 'Você não tem autorização para acessar esse recurso.',
        },
        validation: {
            required: 'Obrigatório',
            minLength: 'Deve ter no mínimo %{min} caracteres',
            maxLength: 'Deve ter no máximo %{max} characters',
            minValue: 'Deve ser no mínimo %{min}',
            maxValue: 'Deve ser no máximo %{max}',
            number: 'Deve ser um número',
            email: 'Deve ser um email válido',
            oneOf: 'Deve ser uma destas opções: %{options}',
            regex: 'Deve corresponder a um formato específico (regexp): %{pattern}',
        },
        saved_queries: {
            label: 'Pesquisas salvas',
            query_name: 'Nome da pesquisa',
            new_label: 'Salvar pesquisa atual...',
            new_dialog_title: 'Salvar pesquisa atual como',
            remove_label: 'Excluir pesquisa salva',
            remove_label_with_name: 'Excluir pesquisa "%{name}"',
            remove_dialog_title: 'Excluir pesquisa salva?',
            remove_message:
                'Tem certeza que deseja remover esse item da sua lista de pesquisas salvas?',
            help: 'Filtrar lista e salvar esta pesquisa para mais tarde',
        },
    },
};

export default portugueseMessages;
