
import {
    Shield,
    Database,
    Map,
    FileText,
    Users,
    Server,
    Activity,
    BarChart,
    Lock,
    Brain,
    Wallet,
    Heart,
    Settings,
    MessageSquare,
    Search
} from 'lucide-react';

export interface ProductUpdate {
    period: string;
    items: {
        title: string;
        details?: string[];
    }[];
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    longDescription: string;
    category: 'Infraestrutura' | 'Dados' | 'Gestão' | 'Cidadão' | 'Comunidade' | 'Produtividade' | 'Saúde' | 'Informação' | 'IA' | 'Transporte' | 'Segurança' | 'Finanças';
    status: 'Disponível' | 'Em Desenvolvimento' | 'Beta' | 'Active'; // added Active to match homepage
    icon: any;
    features: string[];
    metrics?: {
        label: string;
        value: string;
        trend?: 'up' | 'down' | 'neutral';
    }[];
    chartData?: {
        name: string;
        value: number;
    }[];
    // Added fields to match homepage cards if needed, or map them
    year?: string;
    builtFor?: string;
    websiteUrl?: string;
    // New detailed metrics structure
    detailedMetrics?: {
        teamMembers: {
            total: number;
            breakdown: string[];
        };
        costPerQuarter: {
            value: string;
            breakdown?: {
                label: string;
                value: string;
                amount: number;
                color: string;
            }[];
        };
        usage: {
            averageWeekly: string;
            averageWeeklyTooltip?: string;
            totalUsers: string;
            totalUsersTooltip?: string;
            totalHours: string;
            totalHoursTooltip?: string;
        };
        costPerUnit: {
            value: string;
            label: string;
        };
        satisfaction: {
            userScore: string;
            userTooltip?: string;
            adminScore: string;
            adminTooltip?: string;
        };
    };
    updates?: ProductUpdate[];
    overview?: {
        vision: string;
        whyBuilt: {
            label: string;
            title: string;
            content: string;
        };
        whatBuilt: {
            label: string;
            title: string;
            content: string;
            features: {
                title: string;
                description: string;
            }[];
        };
        testimonials?: {
            quote: string;
        }[];
    };
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'activesg',
        name: 'ActiveSG',
        description: 'ActiveSG é uma plataforma para o público reservar instalações esportivas, participar de programas de fitness e acessar academias e piscinas.',
        longDescription: 'Uma iniciativa nacional para encorajar os cidadãos a viverem melhor através do esporte. A plataforma permite reserva de quadras, ginásios e participação em eventos esportivos comunitários de forma simples e digital.',
        category: 'Comunidade',
        status: 'Active',
        icon: Activity,
        year: '2024',
        builtFor: 'Cidadãos',
        websiteUrl: 'activesg.gov.sg',
        features: [
            'Reserva de quadras online',
            'Gestão de memberships',
            'Carteira digital para pagamentos',
            'Histórico de atividades'
        ],
        detailedMetrics: {
            teamMembers: {
                total: 7,
                breakdown: ['1 Product Manager', '3 Engineer', '1 Design', '1 Operations']
            },
            costPerQuarter: {
                value: 'R$ 1.140.800',
                breakdown: [
                    { label: 'Salários', value: 'R$ 346.582', amount: 346582, color: '#60a5fa' },
                    { label: 'Infraestrutura', value: 'R$ 464.694', amount: 464694, color: '#2563eb' },
                    { label: 'Despesas Corporativas', value: 'R$ 260.629', amount: 260629, color: '#94a3b8' },
                    { label: 'Equipamentos e Software', value: 'R$ 61.580', amount: 61580, color: '#475569' },
                    { label: 'Outros', value: 'R$ 7.315', amount: 7315, color: '#000000' }
                ]
            },
            usage: {
                averageWeekly: '162K',
                averageWeeklyTooltip: 'Número médio de usuários se exercitando a cada semana neste trimestre',
                totalUsers: '533K',
                totalUsersTooltip: 'Número total de usuários únicos que se exercitaram neste trimestre',
                totalHours: '1,2M',
                totalHoursTooltip: 'Soma total de horas de exercícios registradas por todos os usuários',
            },
            costPerUnit: {
                value: 'R$ 0,94',
                label: 'custo por sessão de exercício',
            },
            satisfaction: {
                userScore: '4.6/5.0',
                userTooltip: 'Média das avaliações de satisfação dos cidadãos (CSAT)',
                adminScore: '4.8/5.0',
                adminTooltip: 'Média das avaliações de satisfação dos administradores do sistema',
            },
        },
        metrics: [
            { label: 'Usuários Ativos', value: '250K', trend: 'up' },
            { label: 'Reservas/Mês', value: '45K', trend: 'up' }
        ],
        chartData: [
            { name: 'Jan', value: 20 },
            { name: 'Fev', value: 45 },
            { name: 'Mar', value: 30 },
            { name: 'Abr', value: 80 },
            { name: 'Mai', value: 60 },
            { name: 'Jun', value: 90 },
        ],
        updates: [
            {
                period: '2025 T3 JUL-SET',
                items: [
                    {
                        title: 'Suporte para o lançamento nacional planejado em todo o sistema de reservas',
                        details: [
                            'Desenvolvida e entregue a API de catracas para permitir o acesso a instalações geridas por parceiros',
                            'Otimização das transações da Carteira Ativa para reduzir o tempo de latência de reserva'
                        ]
                    }
                ]
            },
            {
                period: '2025 T2 ABR-JUN',
                items: [
                    {
                        title: 'Lançamento piloto bem-sucedido nas instalações da Bedok e Jurong West',
                        details: [
                            'Implementação do novo sistema de filas digitais',
                            'Integração com o provedor de pagamento PayNow para recargas instantâneas'
                        ]
                    },
                    {
                        title: 'Melhorias na experiência do usuário no aplicativo móvel',
                        details: [
                            'Redesenho da página de calendários para facilitar a visualização de horários disponíveis',
                            'Adição de notificações push para lembretes de reserva'
                        ]
                    }
                ]
            }
        ],
        overview: {
            vision: 'Encorajar os cidadãos a viverem melhor através do esporte e atividade física, promovendo uma comunidade mais ativa e saudável em todo o Rio.',
            whyBuilt: {
                label: 'POR QUE CONSTRUÍMOS ISSO',
                title: 'Modernizando o acesso ao esporte na cidade',
                content: 'O sistema anterior era limitado e dificultava o acesso igualitário às instalações públicas. Em parceria com as secretarias de esporte, desenvolvemos uma plataforma escalável que garante transparência no processo de reserva e promove a inclusão social.'
            },
            whatBuilt: {
                label: 'O QUE CONSTRUÍMOS',
                title: 'Uma plataforma completa para o cidadão',
                content: 'Uma solução web-based que centraliza todas as interações do cidadão com os centros esportivos municipais.',
                features: [
                    {
                        title: 'Sistema de Sorteio em Horários de Pico',
                        description: 'Substituímos o sistema de "quem chegar primeiro leva" por um sorteio automatizado, garantindo chances iguais para todos os usuários em horários de alta demanda.'
                    },
                    {
                        title: 'Segurança e Verificação de Usuários',
                        description: 'Integração com sistemas oficiais de identificação para evitar bots e garantir que as reservas sejam feitas por cidadãos reais.'
                    },
                    {
                        title: 'Esporte para Toda a Família',
                        description: 'Possibilidade de vincular contas de dependentes, facilitando a reserva de atividades para crianças e idosos em um único perfil.'
                    }
                ]
            },
            testimonials: [
                {
                    quote: "O novo sistema de sorteio é muito mais justo. Agora sinto que tenho as mesmas chances de conseguir uma quadra de tênis que qualquer outra pessoa."
                }
            ]
        }
    },
    {
        id: '2',
        slug: 'armoury',
        name: 'Armoury',
        description: 'Armoury substitui checklists de papel por digitais para aumentar a transparência, reduzir custos operacionais e gerar insights acionáveis.',
        longDescription: 'Ferramenta essencial para equipes de campo e auditoria. Permite criar formulários dinâmicos, capturar evidências fotográficas e geolocalização, eliminando o papel e agilizando processos de inspeção.',
        category: 'Produtividade',
        status: 'Active',
        icon: Database, // Using Database as placeholder or specific icon
        year: '2023',
        builtFor: 'Servidores Públicos',
        features: [
            'Formulários offline-first',
            'Geolocalização automática',
            'Upload de fotos e evidências',
            'Geração de relatórios PDF'
        ],
        metrics: [
            { label: 'Checklists Digitais', value: '1.2M', trend: 'up' },
            { label: 'Horas Economizadas', value: '50K', trend: 'up' }
        ],
        chartData: [
            { name: 'S1', value: 400 },
            { name: 'S2', value: 300 },
            { name: 'S3', value: 550 },
            { name: 'S4', value: 480 },
        ]
    },
    {
        id: '3',
        slug: 'care360',
        name: 'Care360',
        description: 'Care360 é um sistema de gestão de pacientes que ajuda Assistentes Sociais a gerenciar os cuidados financeiros e psicossociais de seus pacientes.',
        longDescription: 'Sistema integrado para assistência social, proporcionando uma visão 360 graus do cidadão vulnerável. Facilita o acompanhamento de casos, concessão de benefícios e integração com a rede de saúde.',
        category: 'Saúde',
        status: 'Active',
        icon: Users, // Using Users to represent patients/care
        year: '2023',
        builtFor: 'Servidores Públicos',
        features: [
            'Prontuário social unificado',
            'Gestão de benefícios',
            'Alertas de vulnerabilidade',
            'Integração com CRAS/CREAS'
        ],
        metrics: [
            { label: 'Famílias Atendidas', value: '15K', trend: 'up' },
            { label: 'Benefícios Geridos', value: 'R$ 8M', trend: 'neutral' }
        ],
        chartData: [
            { name: 'Q1', value: 1200 },
            { name: 'Q2', value: 1400 },
            { name: 'Q3', value: 1100 },
            { name: 'Q4', value: 1600 },
        ]
    },
    {
        id: '4',
        slug: 'data-rio',
        name: 'Data.rio',
        description: 'Data.rio é o repositório central de dados públicos da cidade, promovendo transparência e inovação através do acesso aberto à informação.',
        longDescription: 'Centralize, visualize e analise dados de diversas fontes da cidade. O Data.Rio empodera gestores com insights em tempo real sobre trânsito, saúde, educação e segurança.',
        category: 'Informação', // Updated category
        status: 'Active', // Updated status
        icon: Database,
        year: '2011',
        builtFor: 'Cidadãos & Servidores',
        features: [
            'API RESTful pública',
            'Dashboards personalizáveis',
            'Integração com sensores IoT',
            'Catálogo de metadados CKAN'
        ],
        metrics: [
            { label: 'Datasets', value: '1.2K', trend: 'up' },
            { label: 'Consultas/Mês', value: '5M+', trend: 'up' },
            { label: 'Órgãos Integrados', value: '42', trend: 'neutral' }
        ],
        chartData: [
            { name: 'Seg', value: 1200 },
            { name: 'Ter', value: 1900 },
            { name: 'Qua', value: 1500 },
            { name: 'Qui', value: 2100 },
            { name: 'Sex', value: 1800 },
            { name: 'Sab', value: 800 },
            { name: 'Dom', value: 600 },
        ]
    },
    {
        id: '5',
        slug: 'mapas-rio',
        name: 'Mapas Rio',
        description: 'Plataforma de georreferenciamento que fornece mapas detalhados e dados espaciais para planejamento urbano e consulta pública.',
        longDescription: 'Solução completa para gestão territorial. Mapas interativos, camadas de zoneamento, equipamentos públicos e imagens de satélite atualizadas.',
        category: 'Informação', // Updated category
        status: 'Active', // Updated status
        icon: Map,
        year: '2025',
        builtFor: 'Cidadãos & Servidores',
        features: [
            'Camadas vetoriais editáveis',
            'Análise espacial',
            'Integração com CAD/GIS',
            'Histórico de ortofotos'
        ],
        metrics: [
            { label: 'Mapas Gerados', value: '15K', trend: 'up' },
            { label: 'Camadas Disponíveis', value: '320', trend: 'up' }
        ],
        chartData: [
            { name: 'Jan', value: 100 },
            { name: 'Fev', value: 120 },
            { name: 'Mar', value: 150 },
            { name: 'Abr', value: 180 },
            { name: 'Mai', value: 250 },
        ]
    },
    {
        id: '6',
        slug: 'pair',
        name: 'Pair',
        description: 'Pair é uma ferramenta de IA assistiva que ajuda servidores a redigir documentos, resumir textos e melhorar a produtividade diária.',
        longDescription: 'Assistente de Inteligência Artificial seguro e focado no setor público. Auxilia na redação de ofícios, resumo de processos, tradução e análise de sentimentos, garantindo a privacidade dos dados.',
        category: 'IA',
        status: 'Active',
        icon: MessageSquare,
        year: '2023',
        builtFor: 'Servidores Públicos',
        features: [
            'Geração de textos administrativos',
            'Resumo automático de documentos',
            'Chatbot interno seguro',
            'Modelos de LLM ajustados'
        ],
        metrics: [
            { label: 'Documentos Gerados', value: '45K', trend: 'up' },
            { label: 'Tempo Poupado', value: '15min/doc', trend: 'up' }
        ],
        chartData: [
            { name: 'Sem 1', value: 50 },
            { name: 'Sem 2', value: 120 },
            { name: 'Sem 3', value: 300 },
            { name: 'Sem 4', value: 450 },
        ]
    },
    // Keeping some original ones if needed, or we can consider them legacy/hidden for now if not on home
    {
        id: '7',
        slug: 'rio-cloud',
        name: 'Rio Cloud',
        description: 'Infraestrutura de nuvem segura e escalável para órgãos municipais.',
        longDescription: 'O Rio Cloud oferece uma plataforma robusta de computação em nuvem.',
        category: 'Infraestrutura',
        status: 'Disponível',
        icon: Server,
        features: ['Auto-scaling'],
        year: '2020',
        builtFor: 'Servidores'
    }
];
