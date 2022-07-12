import * as $protobuf from "protobufjs";
/** Namespace loginapi. */
export namespace loginapi {

    /** Properties of a LoginPasswordReq. */
    interface ILoginPasswordReq {

        /** LoginPasswordReq username */
        username?: (string|null);

        /** LoginPasswordReq password */
        password?: (string|null);

        /** LoginPasswordReq endUsec */
        endUsec?: (number|null);

        /** LoginPasswordReq source */
        source?: (string|null);
    }

    /** Represents a LoginPasswordReq. */
    class LoginPasswordReq implements ILoginPasswordReq {

        /**
         * Constructs a new LoginPasswordReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: loginapi.ILoginPasswordReq);

        /** LoginPasswordReq username. */
        public username: string;

        /** LoginPasswordReq password. */
        public password: string;

        /** LoginPasswordReq endUsec. */
        public endUsec: number;

        /** LoginPasswordReq source. */
        public source: string;

        /**
         * Creates a new LoginPasswordReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginPasswordReq instance
         */
        public static create(properties?: loginapi.ILoginPasswordReq): loginapi.LoginPasswordReq;

        /**
         * Encodes the specified LoginPasswordReq message. Does not implicitly {@link loginapi.LoginPasswordReq.verify|verify} messages.
         * @param message LoginPasswordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: loginapi.ILoginPasswordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginPasswordReq message, length delimited. Does not implicitly {@link loginapi.LoginPasswordReq.verify|verify} messages.
         * @param message LoginPasswordReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: loginapi.ILoginPasswordReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginPasswordReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): loginapi.LoginPasswordReq;

        /**
         * Decodes a LoginPasswordReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): loginapi.LoginPasswordReq;

        /**
         * Verifies a LoginPasswordReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginPasswordReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginPasswordReq
         */
        public static fromObject(object: { [k: string]: any }): loginapi.LoginPasswordReq;

        /**
         * Creates a plain object from a LoginPasswordReq message. Also converts values to other types if specified.
         * @param message LoginPasswordReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: loginapi.LoginPasswordReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginPasswordReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginPasswordResp. */
    interface ILoginPasswordResp {

        /** LoginPasswordResp sid */
        sid?: (string|null);

        /** LoginPasswordResp errorcode */
        errorcode?: (number|null);
    }

    /** Represents a LoginPasswordResp. */
    class LoginPasswordResp implements ILoginPasswordResp {

        /**
         * Constructs a new LoginPasswordResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: loginapi.ILoginPasswordResp);

        /** LoginPasswordResp sid. */
        public sid: string;

        /** LoginPasswordResp errorcode. */
        public errorcode: number;

        /**
         * Creates a new LoginPasswordResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginPasswordResp instance
         */
        public static create(properties?: loginapi.ILoginPasswordResp): loginapi.LoginPasswordResp;

        /**
         * Encodes the specified LoginPasswordResp message. Does not implicitly {@link loginapi.LoginPasswordResp.verify|verify} messages.
         * @param message LoginPasswordResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: loginapi.ILoginPasswordResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginPasswordResp message, length delimited. Does not implicitly {@link loginapi.LoginPasswordResp.verify|verify} messages.
         * @param message LoginPasswordResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: loginapi.ILoginPasswordResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginPasswordResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginPasswordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): loginapi.LoginPasswordResp;

        /**
         * Decodes a LoginPasswordResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginPasswordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): loginapi.LoginPasswordResp;

        /**
         * Verifies a LoginPasswordResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginPasswordResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginPasswordResp
         */
        public static fromObject(object: { [k: string]: any }): loginapi.LoginPasswordResp;

        /**
         * Creates a plain object from a LoginPasswordResp message. Also converts values to other types if specified.
         * @param message LoginPasswordResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: loginapi.LoginPasswordResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginPasswordResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
