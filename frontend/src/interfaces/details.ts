

export interface Detail {
        id: number,
        bot: {
            id: 28,
            name: string,
            alias: string
        },
        case_uuid: string,
        phone: number,
        first_name: string,
        last_name: string,
        code: null,
        case_result: {
            result_id: number,
            name: string,
            is_final: boolean,
            contacted: boolean
        },
        case_duration: string,
        case_log: {
            responses: [
                {
                    text: string,
                    time: number,
                    confidence: number
                }
            ],
            result_id: number,
            commitment: string,
            got_promise: boolean,
            transcription: [
                {
                    text: string,
                    time: number,
                    confidence: number
                }
            ],
            final_sip_code: number
        },
        extra_metadata: {
            bot: string,
            canal: string,
            BOcuit: string,
            lient_name: string,
            correlation_id: string,
            correlation_shared_id: string
        },
        recording: string,
        is_complete: boolean,
        status: string,
        last_updated: string,
        is_active: boolean
    }