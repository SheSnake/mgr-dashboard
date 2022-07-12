/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const loginapi = $root.loginapi = (() => {

    /**
     * Namespace loginapi.
     * @exports loginapi
     * @namespace
     */
    const loginapi = {};

    loginapi.LoginPasswordReq = (function() {

        /**
         * Properties of a LoginPasswordReq.
         * @memberof loginapi
         * @interface ILoginPasswordReq
         * @property {string|null} [username] LoginPasswordReq username
         * @property {string|null} [password] LoginPasswordReq password
         * @property {number|null} [endUsec] LoginPasswordReq endUsec
         * @property {string|null} [source] LoginPasswordReq source
         */

        /**
         * Constructs a new LoginPasswordReq.
         * @memberof loginapi
         * @classdesc Represents a LoginPasswordReq.
         * @implements ILoginPasswordReq
         * @constructor
         * @param {loginapi.ILoginPasswordReq=} [properties] Properties to set
         */
        function LoginPasswordReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginPasswordReq username.
         * @member {string} username
         * @memberof loginapi.LoginPasswordReq
         * @instance
         */
        LoginPasswordReq.prototype.username = "";

        /**
         * LoginPasswordReq password.
         * @member {string} password
         * @memberof loginapi.LoginPasswordReq
         * @instance
         */
        LoginPasswordReq.prototype.password = "";

        /**
         * LoginPasswordReq endUsec.
         * @member {number} endUsec
         * @memberof loginapi.LoginPasswordReq
         * @instance
         */
        LoginPasswordReq.prototype.endUsec = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LoginPasswordReq source.
         * @member {string} source
         * @memberof loginapi.LoginPasswordReq
         * @instance
         */
        LoginPasswordReq.prototype.source = "";

        /**
         * Creates a new LoginPasswordReq instance using the specified properties.
         * @function create
         * @memberof loginapi.LoginPasswordReq
         * @static
         * @param {loginapi.ILoginPasswordReq=} [properties] Properties to set
         * @returns {loginapi.LoginPasswordReq} LoginPasswordReq instance
         */
        LoginPasswordReq.create = function create(properties) {
            return new LoginPasswordReq(properties);
        };

        /**
         * Encodes the specified LoginPasswordReq message. Does not implicitly {@link loginapi.LoginPasswordReq.verify|verify} messages.
         * @function encode
         * @memberof loginapi.LoginPasswordReq
         * @static
         * @param {loginapi.ILoginPasswordReq} message LoginPasswordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginPasswordReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.endUsec != null && Object.hasOwnProperty.call(message, "endUsec"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.endUsec);
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 100, wireType 2 =*/802).string(message.source);
            return writer;
        };

        /**
         * Encodes the specified LoginPasswordReq message, length delimited. Does not implicitly {@link loginapi.LoginPasswordReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof loginapi.LoginPasswordReq
         * @static
         * @param {loginapi.ILoginPasswordReq} message LoginPasswordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginPasswordReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginPasswordReq message from the specified reader or buffer.
         * @function decode
         * @memberof loginapi.LoginPasswordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {loginapi.LoginPasswordReq} LoginPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginPasswordReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.loginapi.LoginPasswordReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.endUsec = reader.uint64();
                    break;
                case 100:
                    message.source = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginPasswordReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof loginapi.LoginPasswordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {loginapi.LoginPasswordReq} LoginPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginPasswordReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginPasswordReq message.
         * @function verify
         * @memberof loginapi.LoginPasswordReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginPasswordReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.endUsec != null && message.hasOwnProperty("endUsec"))
                if (!$util.isInteger(message.endUsec) && !(message.endUsec && $util.isInteger(message.endUsec.low) && $util.isInteger(message.endUsec.high)))
                    return "endUsec: integer|Long expected";
            if (message.source != null && message.hasOwnProperty("source"))
                if (!$util.isString(message.source))
                    return "source: string expected";
            return null;
        };

        /**
         * Creates a LoginPasswordReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof loginapi.LoginPasswordReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {loginapi.LoginPasswordReq} LoginPasswordReq
         */
        LoginPasswordReq.fromObject = function fromObject(object) {
            if (object instanceof $root.loginapi.LoginPasswordReq)
                return object;
            let message = new $root.loginapi.LoginPasswordReq();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            if (object.endUsec != null)
                if ($util.Long)
                    (message.endUsec = $util.Long.fromValue(object.endUsec)).unsigned = true;
                else if (typeof object.endUsec === "string")
                    message.endUsec = parseInt(object.endUsec, 10);
                else if (typeof object.endUsec === "number")
                    message.endUsec = object.endUsec;
                else if (typeof object.endUsec === "object")
                    message.endUsec = new $util.LongBits(object.endUsec.low >>> 0, object.endUsec.high >>> 0).toNumber(true);
            if (object.source != null)
                message.source = String(object.source);
            return message;
        };

        /**
         * Creates a plain object from a LoginPasswordReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof loginapi.LoginPasswordReq
         * @static
         * @param {loginapi.LoginPasswordReq} message LoginPasswordReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginPasswordReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.endUsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endUsec = options.longs === String ? "0" : 0;
                object.source = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.endUsec != null && message.hasOwnProperty("endUsec"))
                if (typeof message.endUsec === "number")
                    object.endUsec = options.longs === String ? String(message.endUsec) : message.endUsec;
                else
                    object.endUsec = options.longs === String ? $util.Long.prototype.toString.call(message.endUsec) : options.longs === Number ? new $util.LongBits(message.endUsec.low >>> 0, message.endUsec.high >>> 0).toNumber(true) : message.endUsec;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            return object;
        };

        /**
         * Converts this LoginPasswordReq to JSON.
         * @function toJSON
         * @memberof loginapi.LoginPasswordReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginPasswordReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginPasswordReq;
    })();

    loginapi.LoginPasswordResp = (function() {

        /**
         * Properties of a LoginPasswordResp.
         * @memberof loginapi
         * @interface ILoginPasswordResp
         * @property {string|null} [sid] LoginPasswordResp sid
         * @property {number|null} [errorcode] LoginPasswordResp errorcode
         */

        /**
         * Constructs a new LoginPasswordResp.
         * @memberof loginapi
         * @classdesc Represents a LoginPasswordResp.
         * @implements ILoginPasswordResp
         * @constructor
         * @param {loginapi.ILoginPasswordResp=} [properties] Properties to set
         */
        function LoginPasswordResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginPasswordResp sid.
         * @member {string} sid
         * @memberof loginapi.LoginPasswordResp
         * @instance
         */
        LoginPasswordResp.prototype.sid = "";

        /**
         * LoginPasswordResp errorcode.
         * @member {number} errorcode
         * @memberof loginapi.LoginPasswordResp
         * @instance
         */
        LoginPasswordResp.prototype.errorcode = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new LoginPasswordResp instance using the specified properties.
         * @function create
         * @memberof loginapi.LoginPasswordResp
         * @static
         * @param {loginapi.ILoginPasswordResp=} [properties] Properties to set
         * @returns {loginapi.LoginPasswordResp} LoginPasswordResp instance
         */
        LoginPasswordResp.create = function create(properties) {
            return new LoginPasswordResp(properties);
        };

        /**
         * Encodes the specified LoginPasswordResp message. Does not implicitly {@link loginapi.LoginPasswordResp.verify|verify} messages.
         * @function encode
         * @memberof loginapi.LoginPasswordResp
         * @static
         * @param {loginapi.ILoginPasswordResp} message LoginPasswordResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginPasswordResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && Object.hasOwnProperty.call(message, "sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            if (message.errorcode != null && Object.hasOwnProperty.call(message, "errorcode"))
                writer.uint32(/* id 100, wireType 0 =*/800).uint64(message.errorcode);
            return writer;
        };

        /**
         * Encodes the specified LoginPasswordResp message, length delimited. Does not implicitly {@link loginapi.LoginPasswordResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof loginapi.LoginPasswordResp
         * @static
         * @param {loginapi.ILoginPasswordResp} message LoginPasswordResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginPasswordResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginPasswordResp message from the specified reader or buffer.
         * @function decode
         * @memberof loginapi.LoginPasswordResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {loginapi.LoginPasswordResp} LoginPasswordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginPasswordResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.loginapi.LoginPasswordResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 100:
                    message.errorcode = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginPasswordResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof loginapi.LoginPasswordResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {loginapi.LoginPasswordResp} LoginPasswordResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginPasswordResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginPasswordResp message.
         * @function verify
         * @memberof loginapi.LoginPasswordResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginPasswordResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.errorcode != null && message.hasOwnProperty("errorcode"))
                if (!$util.isInteger(message.errorcode) && !(message.errorcode && $util.isInteger(message.errorcode.low) && $util.isInteger(message.errorcode.high)))
                    return "errorcode: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginPasswordResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof loginapi.LoginPasswordResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {loginapi.LoginPasswordResp} LoginPasswordResp
         */
        LoginPasswordResp.fromObject = function fromObject(object) {
            if (object instanceof $root.loginapi.LoginPasswordResp)
                return object;
            let message = new $root.loginapi.LoginPasswordResp();
            if (object.sid != null)
                message.sid = String(object.sid);
            if (object.errorcode != null)
                if ($util.Long)
                    (message.errorcode = $util.Long.fromValue(object.errorcode)).unsigned = true;
                else if (typeof object.errorcode === "string")
                    message.errorcode = parseInt(object.errorcode, 10);
                else if (typeof object.errorcode === "number")
                    message.errorcode = object.errorcode;
                else if (typeof object.errorcode === "object")
                    message.errorcode = new $util.LongBits(object.errorcode.low >>> 0, object.errorcode.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a LoginPasswordResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof loginapi.LoginPasswordResp
         * @static
         * @param {loginapi.LoginPasswordResp} message LoginPasswordResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginPasswordResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sid = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.errorcode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.errorcode = options.longs === String ? "0" : 0;
            }
            if (message.sid != null && message.hasOwnProperty("sid"))
                object.sid = message.sid;
            if (message.errorcode != null && message.hasOwnProperty("errorcode"))
                if (typeof message.errorcode === "number")
                    object.errorcode = options.longs === String ? String(message.errorcode) : message.errorcode;
                else
                    object.errorcode = options.longs === String ? $util.Long.prototype.toString.call(message.errorcode) : options.longs === Number ? new $util.LongBits(message.errorcode.low >>> 0, message.errorcode.high >>> 0).toNumber(true) : message.errorcode;
            return object;
        };

        /**
         * Converts this LoginPasswordResp to JSON.
         * @function toJSON
         * @memberof loginapi.LoginPasswordResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginPasswordResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginPasswordResp;
    })();

    return loginapi;
})();

export { $root as default };
