/* eslint-disable */
// @ts-nocheck
import * as $protobuf from "protobufjs";
/** Namespace tradebot. */
export namespace tradebot {

    /** Namespace grpc_server. */
    namespace grpc_server {

        /** Namespace arbitrage. */
        namespace arbitrage {

            /** ErrorCode enum. */
            enum ErrorCode {
                SUCCESS = 10001,
                ARBITRAGE_OPENING_EXIST = 11002,
                ARBITRAGE_OPEN_EXIST = 11003,
                ARBITRAGE_SPOT_DEAL_FAILED = 12004,
                ARBITRAGE_CLOSE_TOO_MORE_UNREALIZED_PNL = 12005,
                ARBITRAGE_CLOSE_INEXIST = 12006,
                ARBITRAGE_CLOSE_STILL_UNREALIZED_BALANCE = 12007,
                ARBITRAGE_CLOSE_STILL_UNSETTLED_BALANCE = 12008,
                ARBITRAGE_ADD_HOLDING_INEXIST = 12009,
                TRANSFER_AMOUNT_NOT_ENOUGH = 12010,
                ARBITRAGE_OPEN_SPOT_FAILED = 11004,
                REQUEST_IN_OPERATING = 30001,
                TOO_MANY_OPEN_REQUEST = 30002,
                REQUEST_ORDER_NOT_EXIST = 30003,
                TAKER_ORDER_FILLED_ZERO = 30004,
                MAKER_OPEN_FAILED = 30005
            }

            /** OrderSide enum. */
            enum OrderSide {
                SELL = -1,
                BUY = 1
            }

            /** PositionType enum. */
            enum PositionType {
                LONG = 1,
                SHORT = -1
            }

            /** FutureContractSide enum. */
            enum FutureContractSide {
                INVALID_FUTURE_SIDE = 0,
                CLOSE = -1,
                OPEN = 1
            }

            /** PostOnlyType enum. */
            enum PostOnlyType {
                CANCEL_IF_NOT_POSSIBLE = 1,
                CANCEL_WHEN_FORCE = 2,
                CANCEL_EXCEED_BEST_ASK = 3,
                CANCEL_LESS_BEST_ASK = 4,
                CANCEL_EXCEED_BEST_BID = 5,
                CANCEL_LESS_BEST_BID = 6,
                FILLED_OR_CANCELED = 7,
                TRY_CANCEL_MAKER = 8,
                REPLACE_OPENING = 9,
                CANCEL_OPENING = 10
            }

            /** OrderActiveType enum. */
            enum OrderActiveType {
                WAITING_DEAL = 1,
                ORDER_HEDGE_ACTIVE = 2
            }

            /** FutureContractType enum. */
            enum FutureContractType {
                INVALID_TYPE = 0,
                THIS_WEEK = 1,
                NEXT_WEEK = 2,
                QUARTER = 3,
                FOREVER = 4
            }

            /** Properties of an Order. */
            interface IOrder {

                /** Order contract */
                contract: string;

                /** Order commodity */
                commodity: string;

                /** Order currency */
                currency: string;

                /** Order price */
                price: string;

                /** Order quantity */
                quantity: string;

                /** Order turnover */
                turnover: string;

                /** Order fee */
                fee: string;

                /** Order orderSide */
                orderSide: tradebot.grpc_server.arbitrage.OrderSide;

                /** Order createdTimestamp */
                createdTimestamp: number;

                /** Order contractVolume */
                contractVolume?: (number|null);

                /** Order futureContractSide */
                futureContractSide?: (tradebot.grpc_server.arbitrage.FutureContractSide|null);

                /** Order futureContractType */
                futureContractType?: (tradebot.grpc_server.arbitrage.FutureContractType|null);

                /** Order futureContractCode */
                futureContractCode?: (string|null);

                /** Order leverRate */
                leverRate?: (number|null);

                /** Order platform */
                platform: string;

                /** Order clientOrderId */
                clientOrderId?: (string|null);
            }

            /** Represents an Order. */
            class Order implements IOrder {

                /**
                 * Constructs a new Order.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IOrder);

                /** Order contract. */
                public contract: string;

                /** Order commodity. */
                public commodity: string;

                /** Order currency. */
                public currency: string;

                /** Order price. */
                public price: string;

                /** Order quantity. */
                public quantity: string;

                /** Order turnover. */
                public turnover: string;

                /** Order fee. */
                public fee: string;

                /** Order orderSide. */
                public orderSide: tradebot.grpc_server.arbitrage.OrderSide;

                /** Order createdTimestamp. */
                public createdTimestamp: number;

                /** Order contractVolume. */
                public contractVolume: number;

                /** Order futureContractSide. */
                public futureContractSide: tradebot.grpc_server.arbitrage.FutureContractSide;

                /** Order futureContractType. */
                public futureContractType: tradebot.grpc_server.arbitrage.FutureContractType;

                /** Order futureContractCode. */
                public futureContractCode: string;

                /** Order leverRate. */
                public leverRate: number;

                /** Order platform. */
                public platform: string;

                /** Order clientOrderId. */
                public clientOrderId: string;

                /**
                 * Creates a new Order instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Order instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IOrder): tradebot.grpc_server.arbitrage.Order;

                /**
                 * Encodes the specified Order message. Does not implicitly {@link tradebot.grpc_server.arbitrage.Order.verify|verify} messages.
                 * @param message Order message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Order message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.Order.verify|verify} messages.
                 * @param message Order message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Order message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Order
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.Order;

                /**
                 * Decodes an Order message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Order
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.Order;

                /**
                 * Verifies an Order message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Order message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Order
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.Order;

                /**
                 * Creates a plain object from an Order message. Also converts values to other types if specified.
                 * @param message Order
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Order to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** RequestType enum. */
            enum RequestType {
                ADD_HOLDING_REQUEST = 1,
                OPEN_REQUEST = 2,
                CLOSE_REQUEST = 3,
                OPEN_POSITION = 4,
                CLOSE_POSITION = 5
            }

            /** Properties of a Transaction. */
            interface ITransaction {

                /** Transaction spotOrder */
                spotOrder: tradebot.grpc_server.arbitrage.IOrder;

                /** Transaction futureOrder */
                futureOrder: tradebot.grpc_server.arbitrage.IOrder;

                /** Transaction minBasisRatio */
                minBasisRatio?: (string|null);

                /** Transaction maxBasisRatio */
                maxBasisRatio?: (string|null);

                /** Transaction openPosition */
                openPosition?: (string|null);
            }

            /** Represents a Transaction. */
            class Transaction implements ITransaction {

                /**
                 * Constructs a new Transaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.ITransaction);

                /** Transaction spotOrder. */
                public spotOrder: tradebot.grpc_server.arbitrage.IOrder;

                /** Transaction futureOrder. */
                public futureOrder: tradebot.grpc_server.arbitrage.IOrder;

                /** Transaction minBasisRatio. */
                public minBasisRatio: string;

                /** Transaction maxBasisRatio. */
                public maxBasisRatio: string;

                /** Transaction openPosition. */
                public openPosition: string;

                /**
                 * Creates a new Transaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Transaction instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.ITransaction): tradebot.grpc_server.arbitrage.Transaction;

                /**
                 * Encodes the specified Transaction message. Does not implicitly {@link tradebot.grpc_server.arbitrage.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Transaction message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.Transaction.verify|verify} messages.
                 * @param message Transaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Transaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.Transaction;

                /**
                 * Decodes a Transaction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Transaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.Transaction;

                /**
                 * Verifies a Transaction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Transaction
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.Transaction;

                /**
                 * Creates a plain object from a Transaction message. Also converts values to other types if specified.
                 * @param message Transaction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Transaction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** TriggerSignal enum. */
            enum TriggerSignal {
                DEPTH_OPEN = 0,
                SHORT_TERM_OPEN = 1,
                TRADE_VOLUME_OPEN = 2,
                PROFIT_CLOSE = 3,
                STOP_LOSS_IMMEDIATE = 4,
                TRY_STOP_LOSS = 5,
                TRY_MIN_PROFIT = 6,
                TRY_MIDDLE_PROFIT = 7,
                TRY_RECOVER_MIDDLE_PROFIT = 8,
                TRY_SAVE_CURRENT_PROFIT = 9,
                TRY_REGAIN_MIDDLE_PROFIT = 10,
                REBOUND_OPEN = 11,
                GUARD_OPEN = 12,
                REBOUND_MAKER_OPEN = 13,
                GUARD_MAKER_OPEN = 14,
                REBOUND_MAKER_GUESS = 15,
                MARKET_MAKER_GUESS = 16,
                REBOUND_MAKER_GUESS_CONTINUE = 17,
                OPPOSITE_OPEN = 18,
                REBOUND_MAKER_GUESS_HIGH = 19
            }

            /** RequestCommand enum. */
            enum RequestCommand {
                NEW_PLACE = 0,
                REPLACE = 1,
                QUERY = 2,
                CANCEL_MAKER = 3
            }

            /** PlaceOrderType enum. */
            enum PlaceOrderType {
                BE_TAKER = 0,
                BE_MAKER = 1
            }

            /** Properties of a HighTradeRequest. */
            interface IHighTradeRequest {

                /** HighTradeRequest requestId */
                requestId: string;

                /** HighTradeRequest createdTimestamp */
                createdTimestamp: number;

                /** HighTradeRequest requestTimestamp */
                requestTimestamp: number;

                /** HighTradeRequest platform */
                platform: string;

                /** HighTradeRequest contract */
                contract: string;

                /** HighTradeRequest commodity */
                commodity: string;

                /** HighTradeRequest currency */
                currency: string;

                /** HighTradeRequest price */
                price: string;

                /** HighTradeRequest quantity */
                quantity: string;

                /** HighTradeRequest futureContractVolume */
                futureContractVolume?: (number|null);

                /** HighTradeRequest orderSide */
                orderSide: tradebot.grpc_server.arbitrage.OrderSide;

                /** HighTradeRequest futureContractSide */
                futureContractSide?: (tradebot.grpc_server.arbitrage.FutureContractSide|null);

                /** HighTradeRequest futureContractType */
                futureContractType?: (tradebot.grpc_server.arbitrage.FutureContractType|null);

                /** HighTradeRequest futureContractCode */
                futureContractCode?: (string|null);

                /** HighTradeRequest leverRate */
                leverRate?: (number|null);

                /** HighTradeRequest clientOrderId */
                clientOrderId?: (string|null);

                /** HighTradeRequest lastOrderId */
                lastOrderId?: (string|null);

                /** HighTradeRequest placeOrderType */
                placeOrderType: tradebot.grpc_server.arbitrage.PlaceOrderType;

                /** HighTradeRequest requestCommand */
                requestCommand: tradebot.grpc_server.arbitrage.RequestCommand;

                /** HighTradeRequest triggerSignal */
                triggerSignal?: (tradebot.grpc_server.arbitrage.TriggerSignal|null);

                /** HighTradeRequest triggerReason */
                triggerReason?: (string|null);

                /** HighTradeRequest predictCloseRatio */
                predictCloseRatio?: (string|null);
            }

            /** Represents a HighTradeRequest. */
            class HighTradeRequest implements IHighTradeRequest {

                /**
                 * Constructs a new HighTradeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IHighTradeRequest);

                /** HighTradeRequest requestId. */
                public requestId: string;

                /** HighTradeRequest createdTimestamp. */
                public createdTimestamp: number;

                /** HighTradeRequest requestTimestamp. */
                public requestTimestamp: number;

                /** HighTradeRequest platform. */
                public platform: string;

                /** HighTradeRequest contract. */
                public contract: string;

                /** HighTradeRequest commodity. */
                public commodity: string;

                /** HighTradeRequest currency. */
                public currency: string;

                /** HighTradeRequest price. */
                public price: string;

                /** HighTradeRequest quantity. */
                public quantity: string;

                /** HighTradeRequest futureContractVolume. */
                public futureContractVolume: number;

                /** HighTradeRequest orderSide. */
                public orderSide: tradebot.grpc_server.arbitrage.OrderSide;

                /** HighTradeRequest futureContractSide. */
                public futureContractSide: tradebot.grpc_server.arbitrage.FutureContractSide;

                /** HighTradeRequest futureContractType. */
                public futureContractType: tradebot.grpc_server.arbitrage.FutureContractType;

                /** HighTradeRequest futureContractCode. */
                public futureContractCode: string;

                /** HighTradeRequest leverRate. */
                public leverRate: number;

                /** HighTradeRequest clientOrderId. */
                public clientOrderId: string;

                /** HighTradeRequest lastOrderId. */
                public lastOrderId: string;

                /** HighTradeRequest placeOrderType. */
                public placeOrderType: tradebot.grpc_server.arbitrage.PlaceOrderType;

                /** HighTradeRequest requestCommand. */
                public requestCommand: tradebot.grpc_server.arbitrage.RequestCommand;

                /** HighTradeRequest triggerSignal. */
                public triggerSignal: tradebot.grpc_server.arbitrage.TriggerSignal;

                /** HighTradeRequest triggerReason. */
                public triggerReason: string;

                /** HighTradeRequest predictCloseRatio. */
                public predictCloseRatio: string;

                /**
                 * Creates a new HighTradeRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HighTradeRequest instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IHighTradeRequest): tradebot.grpc_server.arbitrage.HighTradeRequest;

                /**
                 * Encodes the specified HighTradeRequest message. Does not implicitly {@link tradebot.grpc_server.arbitrage.HighTradeRequest.verify|verify} messages.
                 * @param message HighTradeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IHighTradeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HighTradeRequest message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.HighTradeRequest.verify|verify} messages.
                 * @param message HighTradeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IHighTradeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HighTradeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HighTradeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.HighTradeRequest;

                /**
                 * Decodes a HighTradeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HighTradeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.HighTradeRequest;

                /**
                 * Verifies a HighTradeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HighTradeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HighTradeRequest
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.HighTradeRequest;

                /**
                 * Creates a plain object from a HighTradeRequest message. Also converts values to other types if specified.
                 * @param message HighTradeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.HighTradeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HighTradeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HighTradeResponse. */
            interface IHighTradeResponse {

                /** HighTradeResponse requestId */
                requestId: string;

                /** HighTradeResponse requestTimestamp */
                requestTimestamp: number;

                /** HighTradeResponse responseTimestamp */
                responseTimestamp: number;

                /** HighTradeResponse requestCommand */
                requestCommand: tradebot.grpc_server.arbitrage.RequestCommand;

                /** HighTradeResponse platform */
                platform: string;

                /** HighTradeResponse contract */
                contract: string;

                /** HighTradeResponse targetPrice */
                targetPrice: string;

                /** HighTradeResponse targetFutureContractVolume */
                targetFutureContractVolume: number;

                /** HighTradeResponse dealPrice */
                dealPrice: string;

                /** HighTradeResponse dealQuantity */
                dealQuantity: string;

                /** HighTradeResponse dealTurnover */
                dealTurnover: string;

                /** HighTradeResponse dealFee */
                dealFee: string;

                /** HighTradeResponse profit */
                profit?: (string|null);

                /** HighTradeResponse dealFutureContractVolume */
                dealFutureContractVolume?: (number|null);

                /** HighTradeResponse orderSide */
                orderSide: tradebot.grpc_server.arbitrage.OrderSide;

                /** HighTradeResponse futureContractSide */
                futureContractSide?: (tradebot.grpc_server.arbitrage.FutureContractSide|null);

                /** HighTradeResponse activeOrderId */
                activeOrderId?: (string|null);

                /** HighTradeResponse triggerSignal */
                triggerSignal?: (tradebot.grpc_server.arbitrage.TriggerSignal|null);

                /** HighTradeResponse triggerReason */
                triggerReason?: (string|null);

                /** HighTradeResponse errMsg */
                errMsg?: (string|null);

                /** HighTradeResponse errCode */
                errCode?: (tradebot.grpc_server.arbitrage.ErrorCode|null);
            }

            /** Represents a HighTradeResponse. */
            class HighTradeResponse implements IHighTradeResponse {

                /**
                 * Constructs a new HighTradeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IHighTradeResponse);

                /** HighTradeResponse requestId. */
                public requestId: string;

                /** HighTradeResponse requestTimestamp. */
                public requestTimestamp: number;

                /** HighTradeResponse responseTimestamp. */
                public responseTimestamp: number;

                /** HighTradeResponse requestCommand. */
                public requestCommand: tradebot.grpc_server.arbitrage.RequestCommand;

                /** HighTradeResponse platform. */
                public platform: string;

                /** HighTradeResponse contract. */
                public contract: string;

                /** HighTradeResponse targetPrice. */
                public targetPrice: string;

                /** HighTradeResponse targetFutureContractVolume. */
                public targetFutureContractVolume: number;

                /** HighTradeResponse dealPrice. */
                public dealPrice: string;

                /** HighTradeResponse dealQuantity. */
                public dealQuantity: string;

                /** HighTradeResponse dealTurnover. */
                public dealTurnover: string;

                /** HighTradeResponse dealFee. */
                public dealFee: string;

                /** HighTradeResponse profit. */
                public profit: string;

                /** HighTradeResponse dealFutureContractVolume. */
                public dealFutureContractVolume: number;

                /** HighTradeResponse orderSide. */
                public orderSide: tradebot.grpc_server.arbitrage.OrderSide;

                /** HighTradeResponse futureContractSide. */
                public futureContractSide: tradebot.grpc_server.arbitrage.FutureContractSide;

                /** HighTradeResponse activeOrderId. */
                public activeOrderId: string;

                /** HighTradeResponse triggerSignal. */
                public triggerSignal: tradebot.grpc_server.arbitrage.TriggerSignal;

                /** HighTradeResponse triggerReason. */
                public triggerReason: string;

                /** HighTradeResponse errMsg. */
                public errMsg: string;

                /** HighTradeResponse errCode. */
                public errCode: tradebot.grpc_server.arbitrage.ErrorCode;

                /**
                 * Creates a new HighTradeResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HighTradeResponse instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IHighTradeResponse): tradebot.grpc_server.arbitrage.HighTradeResponse;

                /**
                 * Encodes the specified HighTradeResponse message. Does not implicitly {@link tradebot.grpc_server.arbitrage.HighTradeResponse.verify|verify} messages.
                 * @param message HighTradeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IHighTradeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HighTradeResponse message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.HighTradeResponse.verify|verify} messages.
                 * @param message HighTradeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IHighTradeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HighTradeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HighTradeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.HighTradeResponse;

                /**
                 * Decodes a HighTradeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HighTradeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.HighTradeResponse;

                /**
                 * Verifies a HighTradeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HighTradeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HighTradeResponse
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.HighTradeResponse;

                /**
                 * Creates a plain object from a HighTradeResponse message. Also converts values to other types if specified.
                 * @param message HighTradeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.HighTradeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HighTradeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HftState. */
            interface IHftState {

                /** HftState requestId */
                requestId: string;

                /** HftState platform */
                platform: string;

                /** HftState contract */
                contract: string;

                /** HftState price */
                price: number;

                /** HftState quantity */
                quantity: number;

                /** HftState turnover */
                turnover: number;

                /** HftState fee */
                fee: number;

                /** HftState profit */
                profit: number;

                /** HftState targetFutureContractVolume */
                targetFutureContractVolume: number;

                /** HftState dealFutureContractVolume */
                dealFutureContractVolume: number;

                /** HftState createdTimestamp */
                createdTimestamp: number;

                /** HftState orderSide */
                orderSide: tradebot.grpc_server.arbitrage.OrderSide;

                /** HftState futureContractSide */
                futureContractSide?: (tradebot.grpc_server.arbitrage.FutureContractSide|null);

                /** HftState activeOrderId */
                activeOrderId: string;

                /** HftState lastPlacePrice */
                lastPlacePrice?: (number|null);

                /** HftState triggerSignal */
                triggerSignal: tradebot.grpc_server.arbitrage.TriggerSignal;

                /** HftState triggerReason */
                triggerReason: string;

                /** HftState predictCloseRatio */
                predictCloseRatio?: (number|null);
            }

            /** Represents a HftState. */
            class HftState implements IHftState {

                /**
                 * Constructs a new HftState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IHftState);

                /** HftState requestId. */
                public requestId: string;

                /** HftState platform. */
                public platform: string;

                /** HftState contract. */
                public contract: string;

                /** HftState price. */
                public price: number;

                /** HftState quantity. */
                public quantity: number;

                /** HftState turnover. */
                public turnover: number;

                /** HftState fee. */
                public fee: number;

                /** HftState profit. */
                public profit: number;

                /** HftState targetFutureContractVolume. */
                public targetFutureContractVolume: number;

                /** HftState dealFutureContractVolume. */
                public dealFutureContractVolume: number;

                /** HftState createdTimestamp. */
                public createdTimestamp: number;

                /** HftState orderSide. */
                public orderSide: tradebot.grpc_server.arbitrage.OrderSide;

                /** HftState futureContractSide. */
                public futureContractSide: tradebot.grpc_server.arbitrage.FutureContractSide;

                /** HftState activeOrderId. */
                public activeOrderId: string;

                /** HftState lastPlacePrice. */
                public lastPlacePrice: number;

                /** HftState triggerSignal. */
                public triggerSignal: tradebot.grpc_server.arbitrage.TriggerSignal;

                /** HftState triggerReason. */
                public triggerReason: string;

                /** HftState predictCloseRatio. */
                public predictCloseRatio: number;

                /**
                 * Creates a new HftState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HftState instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IHftState): tradebot.grpc_server.arbitrage.HftState;

                /**
                 * Encodes the specified HftState message. Does not implicitly {@link tradebot.grpc_server.arbitrage.HftState.verify|verify} messages.
                 * @param message HftState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IHftState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HftState message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.HftState.verify|verify} messages.
                 * @param message HftState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IHftState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HftState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HftState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.HftState;

                /**
                 * Decodes a HftState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HftState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.HftState;

                /**
                 * Verifies a HftState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HftState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HftState
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.HftState;

                /**
                 * Creates a plain object from a HftState message. Also converts values to other types if specified.
                 * @param message HftState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.HftState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HftState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HftOpenState. */
            interface IHftOpenState {

                /** HftOpenState openState */
                openState: tradebot.grpc_server.arbitrage.IHftState;

                /** HftOpenState closeState */
                closeState?: (tradebot.grpc_server.arbitrage.IHftState|null);
            }

            /** Represents a HftOpenState. */
            class HftOpenState implements IHftOpenState {

                /**
                 * Constructs a new HftOpenState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IHftOpenState);

                /** HftOpenState openState. */
                public openState: tradebot.grpc_server.arbitrage.IHftState;

                /** HftOpenState closeState. */
                public closeState?: (tradebot.grpc_server.arbitrage.IHftState|null);

                /**
                 * Creates a new HftOpenState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HftOpenState instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IHftOpenState): tradebot.grpc_server.arbitrage.HftOpenState;

                /**
                 * Encodes the specified HftOpenState message. Does not implicitly {@link tradebot.grpc_server.arbitrage.HftOpenState.verify|verify} messages.
                 * @param message HftOpenState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IHftOpenState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HftOpenState message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.HftOpenState.verify|verify} messages.
                 * @param message HftOpenState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IHftOpenState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HftOpenState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HftOpenState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.HftOpenState;

                /**
                 * Decodes a HftOpenState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HftOpenState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.HftOpenState;

                /**
                 * Verifies a HftOpenState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HftOpenState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HftOpenState
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.HftOpenState;

                /**
                 * Creates a plain object from a HftOpenState message. Also converts values to other types if specified.
                 * @param message HftOpenState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.HftOpenState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HftOpenState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HftPositionInfo. */
            interface IHftPositionInfo {

                /** HftPositionInfo openList */
                openList?: (tradebot.grpc_server.arbitrage.IHftOpenState[]|null);

                /** HftPositionInfo openingList */
                openingList?: (tradebot.grpc_server.arbitrage.IHftState[]|null);
            }

            /** Represents a HftPositionInfo. */
            class HftPositionInfo implements IHftPositionInfo {

                /**
                 * Constructs a new HftPositionInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IHftPositionInfo);

                /** HftPositionInfo openList. */
                public openList: tradebot.grpc_server.arbitrage.IHftOpenState[];

                /** HftPositionInfo openingList. */
                public openingList: tradebot.grpc_server.arbitrage.IHftState[];

                /**
                 * Creates a new HftPositionInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HftPositionInfo instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IHftPositionInfo): tradebot.grpc_server.arbitrage.HftPositionInfo;

                /**
                 * Encodes the specified HftPositionInfo message. Does not implicitly {@link tradebot.grpc_server.arbitrage.HftPositionInfo.verify|verify} messages.
                 * @param message HftPositionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IHftPositionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HftPositionInfo message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.HftPositionInfo.verify|verify} messages.
                 * @param message HftPositionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IHftPositionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HftPositionInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HftPositionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.HftPositionInfo;

                /**
                 * Decodes a HftPositionInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HftPositionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.HftPositionInfo;

                /**
                 * Verifies a HftPositionInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HftPositionInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HftPositionInfo
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.HftPositionInfo;

                /**
                 * Creates a plain object from a HftPositionInfo message. Also converts values to other types if specified.
                 * @param message HftPositionInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.HftPositionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HftPositionInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AddHoldingRequest. */
            interface IAddHoldingRequest {

                /** AddHoldingRequest uuid */
                uuid: string;

                /** AddHoldingRequest transaction */
                transaction: tradebot.grpc_server.arbitrage.ITransaction;
            }

            /** Represents an AddHoldingRequest. */
            class AddHoldingRequest implements IAddHoldingRequest {

                /**
                 * Constructs a new AddHoldingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IAddHoldingRequest);

                /** AddHoldingRequest uuid. */
                public uuid: string;

                /** AddHoldingRequest transaction. */
                public transaction: tradebot.grpc_server.arbitrage.ITransaction;

                /**
                 * Creates a new AddHoldingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddHoldingRequest instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IAddHoldingRequest): tradebot.grpc_server.arbitrage.AddHoldingRequest;

                /**
                 * Encodes the specified AddHoldingRequest message. Does not implicitly {@link tradebot.grpc_server.arbitrage.AddHoldingRequest.verify|verify} messages.
                 * @param message AddHoldingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IAddHoldingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddHoldingRequest message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.AddHoldingRequest.verify|verify} messages.
                 * @param message AddHoldingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IAddHoldingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddHoldingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddHoldingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.AddHoldingRequest;

                /**
                 * Decodes an AddHoldingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddHoldingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.AddHoldingRequest;

                /**
                 * Verifies an AddHoldingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddHoldingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddHoldingRequest
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.AddHoldingRequest;

                /**
                 * Creates a plain object from an AddHoldingRequest message. Also converts values to other types if specified.
                 * @param message AddHoldingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.AddHoldingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddHoldingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AddHoldingResponse. */
            interface IAddHoldingResponse {

                /** AddHoldingResponse uuid */
                uuid: string;

                /** AddHoldingResponse transaction */
                transaction: tradebot.grpc_server.arbitrage.ITransaction;
            }

            /** Represents an AddHoldingResponse. */
            class AddHoldingResponse implements IAddHoldingResponse {

                /**
                 * Constructs a new AddHoldingResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IAddHoldingResponse);

                /** AddHoldingResponse uuid. */
                public uuid: string;

                /** AddHoldingResponse transaction. */
                public transaction: tradebot.grpc_server.arbitrage.ITransaction;

                /**
                 * Creates a new AddHoldingResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddHoldingResponse instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IAddHoldingResponse): tradebot.grpc_server.arbitrage.AddHoldingResponse;

                /**
                 * Encodes the specified AddHoldingResponse message. Does not implicitly {@link tradebot.grpc_server.arbitrage.AddHoldingResponse.verify|verify} messages.
                 * @param message AddHoldingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IAddHoldingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddHoldingResponse message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.AddHoldingResponse.verify|verify} messages.
                 * @param message AddHoldingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IAddHoldingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddHoldingResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddHoldingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.AddHoldingResponse;

                /**
                 * Decodes an AddHoldingResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddHoldingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.AddHoldingResponse;

                /**
                 * Verifies an AddHoldingResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddHoldingResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddHoldingResponse
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.AddHoldingResponse;

                /**
                 * Creates a plain object from an AddHoldingResponse message. Also converts values to other types if specified.
                 * @param message AddHoldingResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.AddHoldingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddHoldingResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ArbitrageRequest. */
            interface IArbitrageRequest {

                /** ArbitrageRequest transaction */
                transaction: tradebot.grpc_server.arbitrage.ITransaction;
            }

            /** Represents an ArbitrageRequest. */
            class ArbitrageRequest implements IArbitrageRequest {

                /**
                 * Constructs a new ArbitrageRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IArbitrageRequest);

                /** ArbitrageRequest transaction. */
                public transaction: tradebot.grpc_server.arbitrage.ITransaction;

                /**
                 * Creates a new ArbitrageRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ArbitrageRequest instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IArbitrageRequest): tradebot.grpc_server.arbitrage.ArbitrageRequest;

                /**
                 * Encodes the specified ArbitrageRequest message. Does not implicitly {@link tradebot.grpc_server.arbitrage.ArbitrageRequest.verify|verify} messages.
                 * @param message ArbitrageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IArbitrageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ArbitrageRequest message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.ArbitrageRequest.verify|verify} messages.
                 * @param message ArbitrageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IArbitrageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ArbitrageRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ArbitrageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.ArbitrageRequest;

                /**
                 * Decodes an ArbitrageRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ArbitrageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.ArbitrageRequest;

                /**
                 * Verifies an ArbitrageRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ArbitrageRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ArbitrageRequest
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.ArbitrageRequest;

                /**
                 * Creates a plain object from an ArbitrageRequest message. Also converts values to other types if specified.
                 * @param message ArbitrageRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.ArbitrageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ArbitrageRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ArbitrageResponse. */
            interface IArbitrageResponse {

                /** ArbitrageResponse uuid */
                uuid: string;

                /** ArbitrageResponse transaction */
                transaction: tradebot.grpc_server.arbitrage.ITransaction;

                /** ArbitrageResponse errorCode */
                errorCode: tradebot.grpc_server.arbitrage.ErrorCode;

                /** ArbitrageResponse errorMsg */
                errorMsg?: (string|null);
            }

            /** Represents an ArbitrageResponse. */
            class ArbitrageResponse implements IArbitrageResponse {

                /**
                 * Constructs a new ArbitrageResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IArbitrageResponse);

                /** ArbitrageResponse uuid. */
                public uuid: string;

                /** ArbitrageResponse transaction. */
                public transaction: tradebot.grpc_server.arbitrage.ITransaction;

                /** ArbitrageResponse errorCode. */
                public errorCode: tradebot.grpc_server.arbitrage.ErrorCode;

                /** ArbitrageResponse errorMsg. */
                public errorMsg: string;

                /**
                 * Creates a new ArbitrageResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ArbitrageResponse instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IArbitrageResponse): tradebot.grpc_server.arbitrage.ArbitrageResponse;

                /**
                 * Encodes the specified ArbitrageResponse message. Does not implicitly {@link tradebot.grpc_server.arbitrage.ArbitrageResponse.verify|verify} messages.
                 * @param message ArbitrageResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IArbitrageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ArbitrageResponse message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.ArbitrageResponse.verify|verify} messages.
                 * @param message ArbitrageResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IArbitrageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ArbitrageResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ArbitrageResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.ArbitrageResponse;

                /**
                 * Decodes an ArbitrageResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ArbitrageResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.ArbitrageResponse;

                /**
                 * Verifies an ArbitrageResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ArbitrageResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ArbitrageResponse
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.ArbitrageResponse;

                /**
                 * Creates a plain object from an ArbitrageResponse message. Also converts values to other types if specified.
                 * @param message ArbitrageResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.ArbitrageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ArbitrageResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Level. */
            interface ILevel {

                /** Level digit */
                digit: number;

                /** Level px */
                px: number;

                /** Level qty */
                qty: number;
            }

            /** Represents a Level. */
            class Level implements ILevel {

                /**
                 * Constructs a new Level.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.ILevel);

                /** Level digit. */
                public digit: number;

                /** Level px. */
                public px: number;

                /** Level qty. */
                public qty: number;

                /**
                 * Creates a new Level instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Level instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.ILevel): tradebot.grpc_server.arbitrage.Level;

                /**
                 * Encodes the specified Level message. Does not implicitly {@link tradebot.grpc_server.arbitrage.Level.verify|verify} messages.
                 * @param message Level message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.ILevel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Level message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.Level.verify|verify} messages.
                 * @param message Level message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.ILevel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Level message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Level
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.Level;

                /**
                 * Decodes a Level message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Level
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.Level;

                /**
                 * Verifies a Level message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Level message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Level
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.Level;

                /**
                 * Creates a plain object from a Level message. Also converts values to other types if specified.
                 * @param message Level
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.Level, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Level to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Orderbook. */
            interface IOrderbook {

                /** Orderbook platform */
                platform: string;

                /** Orderbook contract */
                contract: string;

                /** Orderbook currency */
                currency: string;

                /** Orderbook commodity */
                commodity: string;

                /** Orderbook futureContractCode */
                futureContractCode?: (string|null);

                /** Orderbook bidLevel */
                bidLevel?: (tradebot.grpc_server.arbitrage.ILevel[]|null);

                /** Orderbook askLevel */
                askLevel?: (tradebot.grpc_server.arbitrage.ILevel[]|null);

                /** Orderbook ts */
                ts: number;

                /** Orderbook publishTs */
                publishTs: number;
            }

            /** Represents an Orderbook. */
            class Orderbook implements IOrderbook {

                /**
                 * Constructs a new Orderbook.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IOrderbook);

                /** Orderbook platform. */
                public platform: string;

                /** Orderbook contract. */
                public contract: string;

                /** Orderbook currency. */
                public currency: string;

                /** Orderbook commodity. */
                public commodity: string;

                /** Orderbook futureContractCode. */
                public futureContractCode: string;

                /** Orderbook bidLevel. */
                public bidLevel: tradebot.grpc_server.arbitrage.ILevel[];

                /** Orderbook askLevel. */
                public askLevel: tradebot.grpc_server.arbitrage.ILevel[];

                /** Orderbook ts. */
                public ts: number;

                /** Orderbook publishTs. */
                public publishTs: number;

                /**
                 * Creates a new Orderbook instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Orderbook instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IOrderbook): tradebot.grpc_server.arbitrage.Orderbook;

                /**
                 * Encodes the specified Orderbook message. Does not implicitly {@link tradebot.grpc_server.arbitrage.Orderbook.verify|verify} messages.
                 * @param message Orderbook message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IOrderbook, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Orderbook message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.Orderbook.verify|verify} messages.
                 * @param message Orderbook message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IOrderbook, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Orderbook message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Orderbook
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.Orderbook;

                /**
                 * Decodes an Orderbook message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Orderbook
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.Orderbook;

                /**
                 * Verifies an Orderbook message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Orderbook message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Orderbook
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.Orderbook;

                /**
                 * Creates a plain object from an Orderbook message. Also converts values to other types if specified.
                 * @param message Orderbook
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.Orderbook, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Orderbook to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HftMarketData. */
            interface IHftMarketData {

                /** HftMarketData orderbook */
                orderbook: tradebot.grpc_server.arbitrage.IOrderbook;

                /** HftMarketData positionInfo */
                positionInfo: tradebot.grpc_server.arbitrage.IHftPositionInfo;
            }

            /** Represents a HftMarketData. */
            class HftMarketData implements IHftMarketData {

                /**
                 * Constructs a new HftMarketData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: tradebot.grpc_server.arbitrage.IHftMarketData);

                /** HftMarketData orderbook. */
                public orderbook: tradebot.grpc_server.arbitrage.IOrderbook;

                /** HftMarketData positionInfo. */
                public positionInfo: tradebot.grpc_server.arbitrage.IHftPositionInfo;

                /**
                 * Creates a new HftMarketData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HftMarketData instance
                 */
                public static create(properties?: tradebot.grpc_server.arbitrage.IHftMarketData): tradebot.grpc_server.arbitrage.HftMarketData;

                /**
                 * Encodes the specified HftMarketData message. Does not implicitly {@link tradebot.grpc_server.arbitrage.HftMarketData.verify|verify} messages.
                 * @param message HftMarketData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: tradebot.grpc_server.arbitrage.IHftMarketData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HftMarketData message, length delimited. Does not implicitly {@link tradebot.grpc_server.arbitrage.HftMarketData.verify|verify} messages.
                 * @param message HftMarketData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: tradebot.grpc_server.arbitrage.IHftMarketData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HftMarketData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HftMarketData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradebot.grpc_server.arbitrage.HftMarketData;

                /**
                 * Decodes a HftMarketData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HftMarketData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradebot.grpc_server.arbitrage.HftMarketData;

                /**
                 * Verifies a HftMarketData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HftMarketData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HftMarketData
                 */
                public static fromObject(object: { [k: string]: any }): tradebot.grpc_server.arbitrage.HftMarketData;

                /**
                 * Creates a plain object from a HftMarketData message. Also converts values to other types if specified.
                 * @param message HftMarketData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: tradebot.grpc_server.arbitrage.HftMarketData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HftMarketData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents an ArbitrageService */
            class ArbitrageService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new ArbitrageService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new ArbitrageService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ArbitrageService;

                /**
                 * Calls add_holding.
                 * @param request ArbitrageRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ArbitrageResponse
                 */
                public add_holding(request: tradebot.grpc_server.arbitrage.IArbitrageRequest, callback: tradebot.grpc_server.arbitrage.ArbitrageService.add_holdingCallback): void;

                /**
                 * Calls add_holding.
                 * @param request ArbitrageRequest message or plain object
                 * @returns Promise
                 */
                public add_holding(request: tradebot.grpc_server.arbitrage.IArbitrageRequest): Promise<tradebot.grpc_server.arbitrage.ArbitrageResponse>;

                /**
                 * Calls open_arbitrage.
                 * @param request ArbitrageRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ArbitrageResponse
                 */
                public open_arbitrage(request: tradebot.grpc_server.arbitrage.IArbitrageRequest, callback: tradebot.grpc_server.arbitrage.ArbitrageService.open_arbitrageCallback): void;

                /**
                 * Calls open_arbitrage.
                 * @param request ArbitrageRequest message or plain object
                 * @returns Promise
                 */
                public open_arbitrage(request: tradebot.grpc_server.arbitrage.IArbitrageRequest): Promise<tradebot.grpc_server.arbitrage.ArbitrageResponse>;

                /**
                 * Calls close_arbitrage.
                 * @param request ArbitrageRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ArbitrageResponse
                 */
                public close_arbitrage(request: tradebot.grpc_server.arbitrage.IArbitrageRequest, callback: tradebot.grpc_server.arbitrage.ArbitrageService.close_arbitrageCallback): void;

                /**
                 * Calls close_arbitrage.
                 * @param request ArbitrageRequest message or plain object
                 * @returns Promise
                 */
                public close_arbitrage(request: tradebot.grpc_server.arbitrage.IArbitrageRequest): Promise<tradebot.grpc_server.arbitrage.ArbitrageResponse>;

                /**
                 * Calls open_position.
                 * @param request HighTradeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and HighTradeResponse
                 */
                public open_position(request: tradebot.grpc_server.arbitrage.IHighTradeRequest, callback: tradebot.grpc_server.arbitrage.ArbitrageService.open_positionCallback): void;

                /**
                 * Calls open_position.
                 * @param request HighTradeRequest message or plain object
                 * @returns Promise
                 */
                public open_position(request: tradebot.grpc_server.arbitrage.IHighTradeRequest): Promise<tradebot.grpc_server.arbitrage.HighTradeResponse>;

                /**
                 * Calls close_position.
                 * @param request HighTradeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and HighTradeResponse
                 */
                public close_position(request: tradebot.grpc_server.arbitrage.IHighTradeRequest, callback: tradebot.grpc_server.arbitrage.ArbitrageService.close_positionCallback): void;

                /**
                 * Calls close_position.
                 * @param request HighTradeRequest message or plain object
                 * @returns Promise
                 */
                public close_position(request: tradebot.grpc_server.arbitrage.IHighTradeRequest): Promise<tradebot.grpc_server.arbitrage.HighTradeResponse>;
            }

            namespace ArbitrageService {

                /**
                 * Callback as used by {@link tradebot.grpc_server.arbitrage.ArbitrageService#add_holding}.
                 * @param error Error, if any
                 * @param [response] ArbitrageResponse
                 */
                type add_holdingCallback = (error: (Error|null), response?: tradebot.grpc_server.arbitrage.ArbitrageResponse) => void;

                /**
                 * Callback as used by {@link tradebot.grpc_server.arbitrage.ArbitrageService#open_arbitrage}.
                 * @param error Error, if any
                 * @param [response] ArbitrageResponse
                 */
                type open_arbitrageCallback = (error: (Error|null), response?: tradebot.grpc_server.arbitrage.ArbitrageResponse) => void;

                /**
                 * Callback as used by {@link tradebot.grpc_server.arbitrage.ArbitrageService#close_arbitrage}.
                 * @param error Error, if any
                 * @param [response] ArbitrageResponse
                 */
                type close_arbitrageCallback = (error: (Error|null), response?: tradebot.grpc_server.arbitrage.ArbitrageResponse) => void;

                /**
                 * Callback as used by {@link tradebot.grpc_server.arbitrage.ArbitrageService#open_position}.
                 * @param error Error, if any
                 * @param [response] HighTradeResponse
                 */
                type open_positionCallback = (error: (Error|null), response?: tradebot.grpc_server.arbitrage.HighTradeResponse) => void;

                /**
                 * Callback as used by {@link tradebot.grpc_server.arbitrage.ArbitrageService#close_position}.
                 * @param error Error, if any
                 * @param [response] HighTradeResponse
                 */
                type close_positionCallback = (error: (Error|null), response?: tradebot.grpc_server.arbitrage.HighTradeResponse) => void;
            }
        }
    }
}

/** Namespace tradeconfig. */
export namespace tradeconfig {

    /** LogLevel enum. */
    enum LogLevel {
        TRACE = 0,
        DEBUG = 1,
        INFO = 2,
        WARN = 3,
        ERROR = 4,
        CRITICAL = 5,
        OFF = 6
    }

    /** Properties of a LogConfig. */
    interface ILogConfig {

        /** LogConfig logPath */
        logPath?: (string|null);

        /** LogConfig logLevel */
        logLevel?: (tradeconfig.LogLevel|null);

        /** LogConfig flushSecondInterval */
        flushSecondInterval?: (number|null);
    }

    /** Represents a LogConfig. */
    class LogConfig implements ILogConfig {

        /**
         * Constructs a new LogConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: tradeconfig.ILogConfig);

        /** LogConfig logPath. */
        public logPath: string;

        /** LogConfig logLevel. */
        public logLevel: tradeconfig.LogLevel;

        /** LogConfig flushSecondInterval. */
        public flushSecondInterval: number;

        /**
         * Creates a new LogConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogConfig instance
         */
        public static create(properties?: tradeconfig.ILogConfig): tradeconfig.LogConfig;

        /**
         * Encodes the specified LogConfig message. Does not implicitly {@link tradeconfig.LogConfig.verify|verify} messages.
         * @param message LogConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tradeconfig.ILogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogConfig message, length delimited. Does not implicitly {@link tradeconfig.LogConfig.verify|verify} messages.
         * @param message LogConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tradeconfig.ILogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradeconfig.LogConfig;

        /**
         * Decodes a LogConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradeconfig.LogConfig;

        /**
         * Verifies a LogConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogConfig
         */
        public static fromObject(object: { [k: string]: any }): tradeconfig.LogConfig;

        /**
         * Creates a plain object from a LogConfig message. Also converts values to other types if specified.
         * @param message LogConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tradeconfig.LogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FakeServerConfig. */
    interface IFakeServerConfig {

        /** FakeServerConfig datapath */
        datapath?: (string|null);

        /** FakeServerConfig fileformat */
        fileformat?: (string|null);

        /** FakeServerConfig firstFileTs */
        firstFileTs?: (number|null);

        /** FakeServerConfig testDay */
        testDay?: (number|null);

        /** FakeServerConfig summarySavePath */
        summarySavePath?: (string|null);

        /** FakeServerConfig symbolId */
        symbolId?: (string|null);
    }

    /** Represents a FakeServerConfig. */
    class FakeServerConfig implements IFakeServerConfig {

        /**
         * Constructs a new FakeServerConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: tradeconfig.IFakeServerConfig);

        /** FakeServerConfig datapath. */
        public datapath: string;

        /** FakeServerConfig fileformat. */
        public fileformat: string;

        /** FakeServerConfig firstFileTs. */
        public firstFileTs: number;

        /** FakeServerConfig testDay. */
        public testDay: number;

        /** FakeServerConfig summarySavePath. */
        public summarySavePath: string;

        /** FakeServerConfig symbolId. */
        public symbolId: string;

        /**
         * Creates a new FakeServerConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FakeServerConfig instance
         */
        public static create(properties?: tradeconfig.IFakeServerConfig): tradeconfig.FakeServerConfig;

        /**
         * Encodes the specified FakeServerConfig message. Does not implicitly {@link tradeconfig.FakeServerConfig.verify|verify} messages.
         * @param message FakeServerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tradeconfig.IFakeServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FakeServerConfig message, length delimited. Does not implicitly {@link tradeconfig.FakeServerConfig.verify|verify} messages.
         * @param message FakeServerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tradeconfig.IFakeServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FakeServerConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FakeServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradeconfig.FakeServerConfig;

        /**
         * Decodes a FakeServerConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FakeServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradeconfig.FakeServerConfig;

        /**
         * Verifies a FakeServerConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FakeServerConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FakeServerConfig
         */
        public static fromObject(object: { [k: string]: any }): tradeconfig.FakeServerConfig;

        /**
         * Creates a plain object from a FakeServerConfig message. Also converts values to other types if specified.
         * @param message FakeServerConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tradeconfig.FakeServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FakeServerConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerConfig. */
    interface IServerConfig {

        /** ServerConfig publishAddr */
        publishAddr?: (string|null);

        /** ServerConfig requestAddr */
        requestAddr?: (string|null);

        /** ServerConfig platform */
        platform?: (st.Platform|null);

        /** ServerConfig contract */
        contract?: (string|null);

        /** ServerConfig futureContractCode */
        futureContractCode?: (string|null);

        /** ServerConfig coinFuture */
        coinFuture?: (st.ICoinFuture|null);

        /** ServerConfig baseCont */
        baseCont?: (number|null);

        /** ServerConfig randomTargetProfitRatio */
        randomTargetProfitRatio?: (string|null);

        /** ServerConfig pollInterval */
        pollInterval?: (number|null);

        /** ServerConfig randomStrategyConfig */
        randomStrategyConfig?: (tradeconfig.IRandomStrategyConfig|null);

        /** ServerConfig rapidTradeParameter */
        rapidTradeParameter?: (strategyparameter.IRapidTradeTriggerParameter|null);

        /** ServerConfig fakeServerConfig */
        fakeServerConfig?: (tradeconfig.IFakeServerConfig|null);
    }

    /** Represents a ServerConfig. */
    class ServerConfig implements IServerConfig {

        /**
         * Constructs a new ServerConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: tradeconfig.IServerConfig);

        /** ServerConfig publishAddr. */
        public publishAddr: string;

        /** ServerConfig requestAddr. */
        public requestAddr: string;

        /** ServerConfig platform. */
        public platform: st.Platform;

        /** ServerConfig contract. */
        public contract: string;

        /** ServerConfig futureContractCode. */
        public futureContractCode: string;

        /** ServerConfig coinFuture. */
        public coinFuture?: (st.ICoinFuture|null);

        /** ServerConfig baseCont. */
        public baseCont: number;

        /** ServerConfig randomTargetProfitRatio. */
        public randomTargetProfitRatio: string;

        /** ServerConfig pollInterval. */
        public pollInterval: number;

        /** ServerConfig randomStrategyConfig. */
        public randomStrategyConfig?: (tradeconfig.IRandomStrategyConfig|null);

        /** ServerConfig rapidTradeParameter. */
        public rapidTradeParameter?: (strategyparameter.IRapidTradeTriggerParameter|null);

        /** ServerConfig fakeServerConfig. */
        public fakeServerConfig?: (tradeconfig.IFakeServerConfig|null);

        /**
         * Creates a new ServerConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerConfig instance
         */
        public static create(properties?: tradeconfig.IServerConfig): tradeconfig.ServerConfig;

        /**
         * Encodes the specified ServerConfig message. Does not implicitly {@link tradeconfig.ServerConfig.verify|verify} messages.
         * @param message ServerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tradeconfig.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerConfig message, length delimited. Does not implicitly {@link tradeconfig.ServerConfig.verify|verify} messages.
         * @param message ServerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tradeconfig.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradeconfig.ServerConfig;

        /**
         * Decodes a ServerConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradeconfig.ServerConfig;

        /**
         * Verifies a ServerConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerConfig
         */
        public static fromObject(object: { [k: string]: any }): tradeconfig.ServerConfig;

        /**
         * Creates a plain object from a ServerConfig message. Also converts values to other types if specified.
         * @param message ServerConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tradeconfig.ServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParameterConfig. */
    interface IParameterConfig {

        /** ParameterConfig apolloAddr */
        apolloAddr?: (string|null);
    }

    /** Represents a ParameterConfig. */
    class ParameterConfig implements IParameterConfig {

        /**
         * Constructs a new ParameterConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: tradeconfig.IParameterConfig);

        /** ParameterConfig apolloAddr. */
        public apolloAddr: string;

        /**
         * Creates a new ParameterConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParameterConfig instance
         */
        public static create(properties?: tradeconfig.IParameterConfig): tradeconfig.ParameterConfig;

        /**
         * Encodes the specified ParameterConfig message. Does not implicitly {@link tradeconfig.ParameterConfig.verify|verify} messages.
         * @param message ParameterConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tradeconfig.IParameterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParameterConfig message, length delimited. Does not implicitly {@link tradeconfig.ParameterConfig.verify|verify} messages.
         * @param message ParameterConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tradeconfig.IParameterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParameterConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParameterConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradeconfig.ParameterConfig;

        /**
         * Decodes a ParameterConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParameterConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradeconfig.ParameterConfig;

        /**
         * Verifies a ParameterConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParameterConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParameterConfig
         */
        public static fromObject(object: { [k: string]: any }): tradeconfig.ParameterConfig;

        /**
         * Creates a plain object from a ParameterConfig message. Also converts values to other types if specified.
         * @param message ParameterConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tradeconfig.ParameterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParameterConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RandomStrategyConfig. */
    interface IRandomStrategyConfig {

        /** RandomStrategyConfig targetProfit */
        targetProfit?: (string|null);

        /** RandomStrategyConfig future */
        future?: (st.ICoinFuture|null);
    }

    /** Represents a RandomStrategyConfig. */
    class RandomStrategyConfig implements IRandomStrategyConfig {

        /**
         * Constructs a new RandomStrategyConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: tradeconfig.IRandomStrategyConfig);

        /** RandomStrategyConfig targetProfit. */
        public targetProfit: string;

        /** RandomStrategyConfig future. */
        public future?: (st.ICoinFuture|null);

        /**
         * Creates a new RandomStrategyConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RandomStrategyConfig instance
         */
        public static create(properties?: tradeconfig.IRandomStrategyConfig): tradeconfig.RandomStrategyConfig;

        /**
         * Encodes the specified RandomStrategyConfig message. Does not implicitly {@link tradeconfig.RandomStrategyConfig.verify|verify} messages.
         * @param message RandomStrategyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tradeconfig.IRandomStrategyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RandomStrategyConfig message, length delimited. Does not implicitly {@link tradeconfig.RandomStrategyConfig.verify|verify} messages.
         * @param message RandomStrategyConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tradeconfig.IRandomStrategyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RandomStrategyConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RandomStrategyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradeconfig.RandomStrategyConfig;

        /**
         * Decodes a RandomStrategyConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RandomStrategyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradeconfig.RandomStrategyConfig;

        /**
         * Verifies a RandomStrategyConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RandomStrategyConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RandomStrategyConfig
         */
        public static fromObject(object: { [k: string]: any }): tradeconfig.RandomStrategyConfig;

        /**
         * Creates a plain object from a RandomStrategyConfig message. Also converts values to other types if specified.
         * @param message RandomStrategyConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tradeconfig.RandomStrategyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RandomStrategyConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedisConfig. */
    interface IRedisConfig {

        /** RedisConfig addr */
        addr?: (string|null);

        /** RedisConfig port */
        port?: (string|null);

        /** RedisConfig password */
        password?: (string|null);
    }

    /** Represents a RedisConfig. */
    class RedisConfig implements IRedisConfig {

        /**
         * Constructs a new RedisConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: tradeconfig.IRedisConfig);

        /** RedisConfig addr. */
        public addr: string;

        /** RedisConfig port. */
        public port: string;

        /** RedisConfig password. */
        public password: string;

        /**
         * Creates a new RedisConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedisConfig instance
         */
        public static create(properties?: tradeconfig.IRedisConfig): tradeconfig.RedisConfig;

        /**
         * Encodes the specified RedisConfig message. Does not implicitly {@link tradeconfig.RedisConfig.verify|verify} messages.
         * @param message RedisConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tradeconfig.IRedisConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RedisConfig message, length delimited. Does not implicitly {@link tradeconfig.RedisConfig.verify|verify} messages.
         * @param message RedisConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tradeconfig.IRedisConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedisConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedisConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradeconfig.RedisConfig;

        /**
         * Decodes a RedisConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RedisConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradeconfig.RedisConfig;

        /**
         * Verifies a RedisConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RedisConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedisConfig
         */
        public static fromObject(object: { [k: string]: any }): tradeconfig.RedisConfig;

        /**
         * Creates a plain object from a RedisConfig message. Also converts values to other types if specified.
         * @param message RedisConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tradeconfig.RedisConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedisConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetUpConfig. */
    interface ISetUpConfig {

        /** SetUpConfig logConfig */
        logConfig?: (tradeconfig.ILogConfig|null);

        /** SetUpConfig serverConfig */
        serverConfig?: (tradeconfig.IServerConfig|null);

        /** SetUpConfig parameterConfig */
        parameterConfig?: (tradeconfig.IParameterConfig|null);

        /** SetUpConfig redisConfig */
        redisConfig?: (tradeconfig.IRedisConfig|null);
    }

    /** Represents a SetUpConfig. */
    class SetUpConfig implements ISetUpConfig {

        /**
         * Constructs a new SetUpConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: tradeconfig.ISetUpConfig);

        /** SetUpConfig logConfig. */
        public logConfig?: (tradeconfig.ILogConfig|null);

        /** SetUpConfig serverConfig. */
        public serverConfig?: (tradeconfig.IServerConfig|null);

        /** SetUpConfig parameterConfig. */
        public parameterConfig?: (tradeconfig.IParameterConfig|null);

        /** SetUpConfig redisConfig. */
        public redisConfig?: (tradeconfig.IRedisConfig|null);

        /**
         * Creates a new SetUpConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetUpConfig instance
         */
        public static create(properties?: tradeconfig.ISetUpConfig): tradeconfig.SetUpConfig;

        /**
         * Encodes the specified SetUpConfig message. Does not implicitly {@link tradeconfig.SetUpConfig.verify|verify} messages.
         * @param message SetUpConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tradeconfig.ISetUpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetUpConfig message, length delimited. Does not implicitly {@link tradeconfig.SetUpConfig.verify|verify} messages.
         * @param message SetUpConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tradeconfig.ISetUpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetUpConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetUpConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tradeconfig.SetUpConfig;

        /**
         * Decodes a SetUpConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetUpConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tradeconfig.SetUpConfig;

        /**
         * Verifies a SetUpConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetUpConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetUpConfig
         */
        public static fromObject(object: { [k: string]: any }): tradeconfig.SetUpConfig;

        /**
         * Creates a plain object from a SetUpConfig message. Also converts values to other types if specified.
         * @param message SetUpConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tradeconfig.SetUpConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetUpConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace st. */
export namespace st {

    /** TradeState enum. */
    enum TradeState {
        DEFAULT_TRADE_STATE = 0,
        TRADE_UNSUBMIT = 1,
        TRADE_SUBMITTED = 2,
        TRADE_EXECUTING = 3,
        TRADE_FINISHED = 4,
        TRADE_CLOSING = 5
    }

    /** TradeSubState enum. */
    enum TradeSubState {
        DEFAULT_TRADE_SUB_STATE = 0,
        TRADE_SUB_UNSUBMIT = 1,
        TRADE_SUB_SUBMITTED = 2,
        TRADE_SUB_PARTIAL_FILLED = 3,
        TRADE_SUB_FULL_FILLED = 4,
        TRADE_SUB_CANCELING = 5,
        TRADE_SUB_CANCELED = 6,
        TRADE_SUB_REJECTED = 7,
        TRADE_SUB_EXECUTING = 8,
        TRADE_TIMEOUT_CLOSED = 9
    }

    /** TradeDir enum. */
    enum TradeDir {
        DEFAULT_TRADE_DIR = 0,
        BID = 1,
        ASK = 2
    }

    /** TradeType enum. */
    enum TradeType {
        DEFAULT_TRADE_TYPE = 0,
        POSITIVE = 1,
        NEG = 2
    }

    /** TradeTargetType enum. */
    enum TradeTargetType {
        DEFAULT_TARGET_TYPE = 0,
        OPEN = 1,
        CLOSE = 2
    }

    /** Platform enum. */
    enum Platform {
        FAKE = 0,
        HUOBI = 2,
        BYBIT = 3
    }

    /** TradeCommandType enum. */
    enum TradeCommandType {
        DEFAULT_COMMAND_TYPE = 0,
        LIMIT_MAKER = 1,
        FOK_TAKER = 2
    }

    /** Properties of a CoinFuture. */
    interface ICoinFuture {

        /** CoinFuture symbol */
        symbol?: (string|null);

        /** CoinFuture currency */
        currency?: (string|null);

        /** CoinFuture commodity */
        commodity?: (string|null);

        /** CoinFuture contUnit */
        contUnit?: (number|null);

        /** CoinFuture priceSlot */
        priceSlot?: (string|null);

        /** CoinFuture platform */
        platform?: (st.Platform|null);
    }

    /** Represents a CoinFuture. */
    class CoinFuture implements ICoinFuture {

        /**
         * Constructs a new CoinFuture.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ICoinFuture);

        /** CoinFuture symbol. */
        public symbol: string;

        /** CoinFuture currency. */
        public currency: string;

        /** CoinFuture commodity. */
        public commodity: string;

        /** CoinFuture contUnit. */
        public contUnit: number;

        /** CoinFuture priceSlot. */
        public priceSlot: string;

        /** CoinFuture platform. */
        public platform: st.Platform;

        /**
         * Creates a new CoinFuture instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CoinFuture instance
         */
        public static create(properties?: st.ICoinFuture): st.CoinFuture;

        /**
         * Encodes the specified CoinFuture message. Does not implicitly {@link st.CoinFuture.verify|verify} messages.
         * @param message CoinFuture message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ICoinFuture, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CoinFuture message, length delimited. Does not implicitly {@link st.CoinFuture.verify|verify} messages.
         * @param message CoinFuture message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ICoinFuture, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CoinFuture message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoinFuture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.CoinFuture;

        /**
         * Decodes a CoinFuture message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CoinFuture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.CoinFuture;

        /**
         * Verifies a CoinFuture message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CoinFuture message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoinFuture
         */
        public static fromObject(object: { [k: string]: any }): st.CoinFuture;

        /**
         * Creates a plain object from a CoinFuture message. Also converts values to other types if specified.
         * @param message CoinFuture
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.CoinFuture, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoinFuture to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Trade. */
    interface ITrade {

        /** Trade orderId */
        orderId?: (string|null);

        /** Trade outOrderId */
        outOrderId?: (string|null);

        /** Trade state */
        state?: (st.TradeState|null);

        /** Trade tradeDir */
        tradeDir?: (st.TradeDir|null);

        /** Trade cont */
        cont?: (number|null);

        /** Trade dealCont */
        dealCont?: (number|null);

        /** Trade future */
        future?: (st.ICoinFuture|null);

        /** Trade targetPrice */
        targetPrice?: (string|null);

        /** Trade dealPrice */
        dealPrice?: (string|null);

        /** Trade fee */
        fee?: (string|null);

        /** Trade platform */
        platform?: (st.Platform|null);

        /** Trade tradeType */
        tradeType?: (st.TradeCommandType|null);

        /** Trade leverRate */
        leverRate?: (number|null);

        /** Trade createTs */
        createTs?: (number|null);

        /** Trade planId */
        planId?: (string|null);

        /** Trade updateTs */
        updateTs?: (number|null);

        /** Trade dataVersion */
        dataVersion?: (number|null);

        /** Trade targetType */
        targetType?: (st.TradeTargetType|null);

        /** Trade subState */
        subState?: (st.TradeSubState|null);

        /** Trade exeTradeReason */
        exeTradeReason?: (string|null);

        /** Trade delTradeReason */
        delTradeReason?: (string|null);

        /** Trade recvMicroWindow */
        recvMicroWindow?: (number|null);
    }

    /** Represents a Trade. */
    class Trade implements ITrade {

        /**
         * Constructs a new Trade.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ITrade);

        /** Trade orderId. */
        public orderId: string;

        /** Trade outOrderId. */
        public outOrderId: string;

        /** Trade state. */
        public state: st.TradeState;

        /** Trade tradeDir. */
        public tradeDir: st.TradeDir;

        /** Trade cont. */
        public cont: number;

        /** Trade dealCont. */
        public dealCont: number;

        /** Trade future. */
        public future?: (st.ICoinFuture|null);

        /** Trade targetPrice. */
        public targetPrice: string;

        /** Trade dealPrice. */
        public dealPrice: string;

        /** Trade fee. */
        public fee: string;

        /** Trade platform. */
        public platform: st.Platform;

        /** Trade tradeType. */
        public tradeType: st.TradeCommandType;

        /** Trade leverRate. */
        public leverRate: number;

        /** Trade createTs. */
        public createTs: number;

        /** Trade planId. */
        public planId: string;

        /** Trade updateTs. */
        public updateTs: number;

        /** Trade dataVersion. */
        public dataVersion: number;

        /** Trade targetType. */
        public targetType: st.TradeTargetType;

        /** Trade subState. */
        public subState: st.TradeSubState;

        /** Trade exeTradeReason. */
        public exeTradeReason: string;

        /** Trade delTradeReason. */
        public delTradeReason: string;

        /** Trade recvMicroWindow. */
        public recvMicroWindow: number;

        /**
         * Creates a new Trade instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Trade instance
         */
        public static create(properties?: st.ITrade): st.Trade;

        /**
         * Encodes the specified Trade message. Does not implicitly {@link st.Trade.verify|verify} messages.
         * @param message Trade message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ITrade, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Trade message, length delimited. Does not implicitly {@link st.Trade.verify|verify} messages.
         * @param message Trade message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ITrade, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Trade message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.Trade;

        /**
         * Decodes a Trade message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.Trade;

        /**
         * Verifies a Trade message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Trade message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Trade
         */
        public static fromObject(object: { [k: string]: any }): st.Trade;

        /**
         * Creates a plain object from a Trade message. Also converts values to other types if specified.
         * @param message Trade
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.Trade, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Trade to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** PositionModifyType enum. */
    enum PositionModifyType {
        DEFAULT_POSITION_MODIFY_TYPE = 0,
        INC_POSITION = 1,
        DEC_POSITION = 2,
        CLEAR_POSITION = 3
    }

    /** PositionSignalPriority enum. */
    enum PositionSignalPriority {
        DEFAULT_PRIORITY = 0,
        ONE_PRIORITY = 1,
        TWO_PRIORITY = 2
    }

    /** PositionModifySignalState enum. */
    enum PositionModifySignalState {
        DEFAULT_SIGNAL_STATE = 0,
        SIGNAL_PREPARE = 1,
        SIGNAL_EXECUTING = 2,
        SIGNAL_FINISH = 3
    }

    /** Properties of a PositionModifySignal. */
    interface IPositionModifySignal {

        /** PositionModifySignal signalId */
        signalId?: (string|null);

        /** PositionModifySignal type */
        type?: (number|null);

        /** PositionModifySignal priority */
        priority?: (number|null);

        /** PositionModifySignal signalTs */
        signalTs?: (number|null);

        /** PositionModifySignal reason */
        reason?: (string|null);

        /** PositionModifySignal targetPositionCont */
        targetPositionCont?: (number|null);

        /** PositionModifySignal modifyTradeId */
        modifyTradeId?: (string|null);

        /** PositionModifySignal state */
        state?: (number|null);
    }

    /** Represents a PositionModifySignal. */
    class PositionModifySignal implements IPositionModifySignal {

        /**
         * Constructs a new PositionModifySignal.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IPositionModifySignal);

        /** PositionModifySignal signalId. */
        public signalId: string;

        /** PositionModifySignal type. */
        public type: number;

        /** PositionModifySignal priority. */
        public priority: number;

        /** PositionModifySignal signalTs. */
        public signalTs: number;

        /** PositionModifySignal reason. */
        public reason: string;

        /** PositionModifySignal targetPositionCont. */
        public targetPositionCont: number;

        /** PositionModifySignal modifyTradeId. */
        public modifyTradeId: string;

        /** PositionModifySignal state. */
        public state: number;

        /**
         * Creates a new PositionModifySignal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PositionModifySignal instance
         */
        public static create(properties?: st.IPositionModifySignal): st.PositionModifySignal;

        /**
         * Encodes the specified PositionModifySignal message. Does not implicitly {@link st.PositionModifySignal.verify|verify} messages.
         * @param message PositionModifySignal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IPositionModifySignal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PositionModifySignal message, length delimited. Does not implicitly {@link st.PositionModifySignal.verify|verify} messages.
         * @param message PositionModifySignal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IPositionModifySignal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PositionModifySignal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PositionModifySignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.PositionModifySignal;

        /**
         * Decodes a PositionModifySignal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PositionModifySignal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.PositionModifySignal;

        /**
         * Verifies a PositionModifySignal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PositionModifySignal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PositionModifySignal
         */
        public static fromObject(object: { [k: string]: any }): st.PositionModifySignal;

        /**
         * Creates a plain object from a PositionModifySignal message. Also converts values to other types if specified.
         * @param message PositionModifySignal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.PositionModifySignal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PositionModifySignal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** CommandType enum. */
    enum CommandType {
        DEFAULT = 0,
        QUERY = 1,
        CANCEL = 2,
        PLACE = 3,
        QUERY_KLINE = 4
    }

    /** Properties of a CommandReq. */
    interface ICommandReq {

        /** CommandReq identity */
        identity?: (string|null);

        /** CommandReq request */
        request?: (google.protobuf.IAny|null);
    }

    /** Represents a CommandReq. */
    class CommandReq implements ICommandReq {

        /**
         * Constructs a new CommandReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ICommandReq);

        /** CommandReq identity. */
        public identity: string;

        /** CommandReq request. */
        public request?: (google.protobuf.IAny|null);

        /**
         * Creates a new CommandReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommandReq instance
         */
        public static create(properties?: st.ICommandReq): st.CommandReq;

        /**
         * Encodes the specified CommandReq message. Does not implicitly {@link st.CommandReq.verify|verify} messages.
         * @param message CommandReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ICommandReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommandReq message, length delimited. Does not implicitly {@link st.CommandReq.verify|verify} messages.
         * @param message CommandReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ICommandReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommandReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommandReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.CommandReq;

        /**
         * Decodes a CommandReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommandReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.CommandReq;

        /**
         * Verifies a CommandReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommandReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommandReq
         */
        public static fromObject(object: { [k: string]: any }): st.CommandReq;

        /**
         * Creates a plain object from a CommandReq message. Also converts values to other types if specified.
         * @param message CommandReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.CommandReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommandReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommandResp. */
    interface ICommandResp {

        /** CommandResp result */
        result?: (google.protobuf.IAny|null);

        /** CommandResp errorMessage */
        errorMessage?: (string|null);
    }

    /** Represents a CommandResp. */
    class CommandResp implements ICommandResp {

        /**
         * Constructs a new CommandResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ICommandResp);

        /** CommandResp result. */
        public result?: (google.protobuf.IAny|null);

        /** CommandResp errorMessage. */
        public errorMessage: string;

        /**
         * Creates a new CommandResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommandResp instance
         */
        public static create(properties?: st.ICommandResp): st.CommandResp;

        /**
         * Encodes the specified CommandResp message. Does not implicitly {@link st.CommandResp.verify|verify} messages.
         * @param message CommandResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ICommandResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommandResp message, length delimited. Does not implicitly {@link st.CommandResp.verify|verify} messages.
         * @param message CommandResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ICommandResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommandResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommandResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.CommandResp;

        /**
         * Decodes a CommandResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommandResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.CommandResp;

        /**
         * Verifies a CommandResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommandResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommandResp
         */
        public static fromObject(object: { [k: string]: any }): st.CommandResp;

        /**
         * Creates a plain object from a CommandResp message. Also converts values to other types if specified.
         * @param message CommandResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.CommandResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommandResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TradeCommandReq. */
    interface ITradeCommandReq {

        /** TradeCommandReq type */
        type?: (st.CommandType|null);

        /** TradeCommandReq trade */
        trade?: (st.ITrade|null);
    }

    /** Represents a TradeCommandReq. */
    class TradeCommandReq implements ITradeCommandReq {

        /**
         * Constructs a new TradeCommandReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ITradeCommandReq);

        /** TradeCommandReq type. */
        public type: st.CommandType;

        /** TradeCommandReq trade. */
        public trade?: (st.ITrade|null);

        /**
         * Creates a new TradeCommandReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeCommandReq instance
         */
        public static create(properties?: st.ITradeCommandReq): st.TradeCommandReq;

        /**
         * Encodes the specified TradeCommandReq message. Does not implicitly {@link st.TradeCommandReq.verify|verify} messages.
         * @param message TradeCommandReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ITradeCommandReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeCommandReq message, length delimited. Does not implicitly {@link st.TradeCommandReq.verify|verify} messages.
         * @param message TradeCommandReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ITradeCommandReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeCommandReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeCommandReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.TradeCommandReq;

        /**
         * Decodes a TradeCommandReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeCommandReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.TradeCommandReq;

        /**
         * Verifies a TradeCommandReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeCommandReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeCommandReq
         */
        public static fromObject(object: { [k: string]: any }): st.TradeCommandReq;

        /**
         * Creates a plain object from a TradeCommandReq message. Also converts values to other types if specified.
         * @param message TradeCommandReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.TradeCommandReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeCommandReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TradeCommandResp. */
    interface ITradeCommandResp {

        /** TradeCommandResp trade */
        trade?: (st.ITrade|null);

        /** TradeCommandResp errorMessage */
        errorMessage?: (string|null);
    }

    /** Represents a TradeCommandResp. */
    class TradeCommandResp implements ITradeCommandResp {

        /**
         * Constructs a new TradeCommandResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ITradeCommandResp);

        /** TradeCommandResp trade. */
        public trade?: (st.ITrade|null);

        /** TradeCommandResp errorMessage. */
        public errorMessage: string;

        /**
         * Creates a new TradeCommandResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeCommandResp instance
         */
        public static create(properties?: st.ITradeCommandResp): st.TradeCommandResp;

        /**
         * Encodes the specified TradeCommandResp message. Does not implicitly {@link st.TradeCommandResp.verify|verify} messages.
         * @param message TradeCommandResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ITradeCommandResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeCommandResp message, length delimited. Does not implicitly {@link st.TradeCommandResp.verify|verify} messages.
         * @param message TradeCommandResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ITradeCommandResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeCommandResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeCommandResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.TradeCommandResp;

        /**
         * Decodes a TradeCommandResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeCommandResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.TradeCommandResp;

        /**
         * Verifies a TradeCommandResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeCommandResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeCommandResp
         */
        public static fromObject(object: { [k: string]: any }): st.TradeCommandResp;

        /**
         * Creates a plain object from a TradeCommandResp message. Also converts values to other types if specified.
         * @param message TradeCommandResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.TradeCommandResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeCommandResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryKlineReq. */
    interface IQueryKlineReq {

        /** QueryKlineReq type */
        type?: (marketdata.KlineType|null);

        /** QueryKlineReq startTs */
        startTs?: (number|null);

        /** QueryKlineReq symbol */
        symbol?: (string|null);

        /** QueryKlineReq limit */
        limit?: (number|null);
    }

    /** Represents a QueryKlineReq. */
    class QueryKlineReq implements IQueryKlineReq {

        /**
         * Constructs a new QueryKlineReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IQueryKlineReq);

        /** QueryKlineReq type. */
        public type: marketdata.KlineType;

        /** QueryKlineReq startTs. */
        public startTs: number;

        /** QueryKlineReq symbol. */
        public symbol: string;

        /** QueryKlineReq limit. */
        public limit: number;

        /**
         * Creates a new QueryKlineReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryKlineReq instance
         */
        public static create(properties?: st.IQueryKlineReq): st.QueryKlineReq;

        /**
         * Encodes the specified QueryKlineReq message. Does not implicitly {@link st.QueryKlineReq.verify|verify} messages.
         * @param message QueryKlineReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IQueryKlineReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryKlineReq message, length delimited. Does not implicitly {@link st.QueryKlineReq.verify|verify} messages.
         * @param message QueryKlineReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IQueryKlineReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryKlineReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryKlineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.QueryKlineReq;

        /**
         * Decodes a QueryKlineReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryKlineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.QueryKlineReq;

        /**
         * Verifies a QueryKlineReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryKlineReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryKlineReq
         */
        public static fromObject(object: { [k: string]: any }): st.QueryKlineReq;

        /**
         * Creates a plain object from a QueryKlineReq message. Also converts values to other types if specified.
         * @param message QueryKlineReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.QueryKlineReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryKlineReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryKlineResp. */
    interface IQueryKlineResp {

        /** QueryKlineResp klines */
        klines?: (marketdata.IKline[]|null);
    }

    /** Represents a QueryKlineResp. */
    class QueryKlineResp implements IQueryKlineResp {

        /**
         * Constructs a new QueryKlineResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IQueryKlineResp);

        /** QueryKlineResp klines. */
        public klines: marketdata.IKline[];

        /**
         * Creates a new QueryKlineResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryKlineResp instance
         */
        public static create(properties?: st.IQueryKlineResp): st.QueryKlineResp;

        /**
         * Encodes the specified QueryKlineResp message. Does not implicitly {@link st.QueryKlineResp.verify|verify} messages.
         * @param message QueryKlineResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IQueryKlineResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryKlineResp message, length delimited. Does not implicitly {@link st.QueryKlineResp.verify|verify} messages.
         * @param message QueryKlineResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IQueryKlineResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryKlineResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryKlineResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.QueryKlineResp;

        /**
         * Decodes a QueryKlineResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryKlineResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.QueryKlineResp;

        /**
         * Verifies a QueryKlineResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryKlineResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryKlineResp
         */
        public static fromObject(object: { [k: string]: any }): st.QueryKlineResp;

        /**
         * Creates a plain object from a QueryKlineResp message. Also converts values to other types if specified.
         * @param message QueryKlineResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.QueryKlineResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryKlineResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** PlanState enum. */
    enum PlanState {
        DEFAULT_PLAN_STATE = 0,
        OPENING = 1,
        STOP_OPENING = 2,
        OPEN_FINISH = 3,
        CLOSING = 4,
        CLOSE_FINISH = 5,
        CANCELED = 6,
        QUICK_CLOSING = 7,
        FUNDING_RATE_RESUME = 8,
        FUNDING_RATE_RESTORE = 9,
        ADD_OPENING = 10,
        SUB_CLOSING = 11
    }

    /** FutureOpenType enum. */
    enum FutureOpenType {
        DEFAULT_OPEN_TYPE = 0,
        FUTURE_LONG = 1,
        FUTURE_SHORT = 2
    }

    /** StrategyActionType enum. */
    enum StrategyActionType {
        DEFAULT_ACTION_TYPE = 0,
        KEEP = 1,
        CONTINUE_TRADE = 2,
        ADD = 3,
        STOP = 4,
        STOP_SOON = 5,
        DEC = 6
    }

    /** FundingRateResumeState enum. */
    enum FundingRateResumeState {
        DEFAULT_FUNDING_RATE_STATE = 0
    }

    /** Properties of a FundingRateSettle. */
    interface IFundingRateSettle {

        /** FundingRateSettle recordId */
        recordId?: (string|null);

        /** FundingRateSettle planId */
        planId?: (string|null);

        /** FundingRateSettle settleUtc8Date */
        settleUtc8Date?: (string|null);

        /** FundingRateSettle settleFundingRate */
        settleFundingRate?: (string|null);

        /** FundingRateSettle settleFee */
        settleFee?: (string|null);

        /** FundingRateSettle settleCont */
        settleCont?: (string|null);

        /** FundingRateSettle settlePositionType */
        settlePositionType?: (st.FutureOpenType|null);
    }

    /** Represents a FundingRateSettle. */
    class FundingRateSettle implements IFundingRateSettle {

        /**
         * Constructs a new FundingRateSettle.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IFundingRateSettle);

        /** FundingRateSettle recordId. */
        public recordId: string;

        /** FundingRateSettle planId. */
        public planId: string;

        /** FundingRateSettle settleUtc8Date. */
        public settleUtc8Date: string;

        /** FundingRateSettle settleFundingRate. */
        public settleFundingRate: string;

        /** FundingRateSettle settleFee. */
        public settleFee: string;

        /** FundingRateSettle settleCont. */
        public settleCont: string;

        /** FundingRateSettle settlePositionType. */
        public settlePositionType: st.FutureOpenType;

        /**
         * Creates a new FundingRateSettle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FundingRateSettle instance
         */
        public static create(properties?: st.IFundingRateSettle): st.FundingRateSettle;

        /**
         * Encodes the specified FundingRateSettle message. Does not implicitly {@link st.FundingRateSettle.verify|verify} messages.
         * @param message FundingRateSettle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IFundingRateSettle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FundingRateSettle message, length delimited. Does not implicitly {@link st.FundingRateSettle.verify|verify} messages.
         * @param message FundingRateSettle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IFundingRateSettle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FundingRateSettle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FundingRateSettle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.FundingRateSettle;

        /**
         * Decodes a FundingRateSettle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FundingRateSettle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.FundingRateSettle;

        /**
         * Verifies a FundingRateSettle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FundingRateSettle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FundingRateSettle
         */
        public static fromObject(object: { [k: string]: any }): st.FundingRateSettle;

        /**
         * Creates a plain object from a FundingRateSettle message. Also converts values to other types if specified.
         * @param message FundingRateSettle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.FundingRateSettle, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FundingRateSettle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FundingRateResumeContext. */
    interface IFundingRateResumeContext {

        /** FundingRateResumeContext planId */
        planId?: (string|null);

        /** FundingRateResumeContext contextId */
        contextId?: (string|null);

        /** FundingRateResumeContext resumeCont */
        resumeCont?: (string|null);

        /** FundingRateResumeContext resumePrice */
        resumePrice?: (string|null);

        /** FundingRateResumeContext resumePositionType */
        resumePositionType?: (st.FutureOpenType|null);

        /** FundingRateResumeContext resumeState */
        resumeState?: (st.FundingRateResumeState|null);
    }

    /** Represents a FundingRateResumeContext. */
    class FundingRateResumeContext implements IFundingRateResumeContext {

        /**
         * Constructs a new FundingRateResumeContext.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IFundingRateResumeContext);

        /** FundingRateResumeContext planId. */
        public planId: string;

        /** FundingRateResumeContext contextId. */
        public contextId: string;

        /** FundingRateResumeContext resumeCont. */
        public resumeCont: string;

        /** FundingRateResumeContext resumePrice. */
        public resumePrice: string;

        /** FundingRateResumeContext resumePositionType. */
        public resumePositionType: st.FutureOpenType;

        /** FundingRateResumeContext resumeState. */
        public resumeState: st.FundingRateResumeState;

        /**
         * Creates a new FundingRateResumeContext instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FundingRateResumeContext instance
         */
        public static create(properties?: st.IFundingRateResumeContext): st.FundingRateResumeContext;

        /**
         * Encodes the specified FundingRateResumeContext message. Does not implicitly {@link st.FundingRateResumeContext.verify|verify} messages.
         * @param message FundingRateResumeContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IFundingRateResumeContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FundingRateResumeContext message, length delimited. Does not implicitly {@link st.FundingRateResumeContext.verify|verify} messages.
         * @param message FundingRateResumeContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IFundingRateResumeContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FundingRateResumeContext message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FundingRateResumeContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.FundingRateResumeContext;

        /**
         * Decodes a FundingRateResumeContext message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FundingRateResumeContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.FundingRateResumeContext;

        /**
         * Verifies a FundingRateResumeContext message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FundingRateResumeContext message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FundingRateResumeContext
         */
        public static fromObject(object: { [k: string]: any }): st.FundingRateResumeContext;

        /**
         * Creates a plain object from a FundingRateResumeContext message. Also converts values to other types if specified.
         * @param message FundingRateResumeContext
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.FundingRateResumeContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FundingRateResumeContext to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddPositionAction. */
    interface IAddPositionAction {

        /** AddPositionAction actionId */
        actionId?: (string|null);

        /** AddPositionAction addCont */
        addCont?: (number|null);

        /** AddPositionAction curProfitRatio */
        curProfitRatio?: (string|null);

        /** AddPositionAction priority */
        priority?: (number|null);

        /** AddPositionAction endTs */
        endTs?: (number|null);
    }

    /** Represents an AddPositionAction. */
    class AddPositionAction implements IAddPositionAction {

        /**
         * Constructs a new AddPositionAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IAddPositionAction);

        /** AddPositionAction actionId. */
        public actionId: string;

        /** AddPositionAction addCont. */
        public addCont: number;

        /** AddPositionAction curProfitRatio. */
        public curProfitRatio: string;

        /** AddPositionAction priority. */
        public priority: number;

        /** AddPositionAction endTs. */
        public endTs: number;

        /**
         * Creates a new AddPositionAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddPositionAction instance
         */
        public static create(properties?: st.IAddPositionAction): st.AddPositionAction;

        /**
         * Encodes the specified AddPositionAction message. Does not implicitly {@link st.AddPositionAction.verify|verify} messages.
         * @param message AddPositionAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IAddPositionAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddPositionAction message, length delimited. Does not implicitly {@link st.AddPositionAction.verify|verify} messages.
         * @param message AddPositionAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IAddPositionAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddPositionAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddPositionAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.AddPositionAction;

        /**
         * Decodes an AddPositionAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddPositionAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.AddPositionAction;

        /**
         * Verifies an AddPositionAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddPositionAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddPositionAction
         */
        public static fromObject(object: { [k: string]: any }): st.AddPositionAction;

        /**
         * Creates a plain object from an AddPositionAction message. Also converts values to other types if specified.
         * @param message AddPositionAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.AddPositionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddPositionAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DecPositionAction. */
    interface IDecPositionAction {

        /** DecPositionAction actionId */
        actionId?: (string|null);

        /** DecPositionAction decCont */
        decCont?: (number|null);

        /** DecPositionAction curProfitRatio */
        curProfitRatio?: (string|null);

        /** DecPositionAction priority */
        priority?: (number|null);

        /** DecPositionAction endTs */
        endTs?: (number|null);

        /** DecPositionAction toCloseTrade */
        toCloseTrade?: (st.ITrade|null);
    }

    /** Represents a DecPositionAction. */
    class DecPositionAction implements IDecPositionAction {

        /**
         * Constructs a new DecPositionAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IDecPositionAction);

        /** DecPositionAction actionId. */
        public actionId: string;

        /** DecPositionAction decCont. */
        public decCont: number;

        /** DecPositionAction curProfitRatio. */
        public curProfitRatio: string;

        /** DecPositionAction priority. */
        public priority: number;

        /** DecPositionAction endTs. */
        public endTs: number;

        /** DecPositionAction toCloseTrade. */
        public toCloseTrade?: (st.ITrade|null);

        /**
         * Creates a new DecPositionAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecPositionAction instance
         */
        public static create(properties?: st.IDecPositionAction): st.DecPositionAction;

        /**
         * Encodes the specified DecPositionAction message. Does not implicitly {@link st.DecPositionAction.verify|verify} messages.
         * @param message DecPositionAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IDecPositionAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DecPositionAction message, length delimited. Does not implicitly {@link st.DecPositionAction.verify|verify} messages.
         * @param message DecPositionAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IDecPositionAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DecPositionAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DecPositionAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.DecPositionAction;

        /**
         * Decodes a DecPositionAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DecPositionAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.DecPositionAction;

        /**
         * Verifies a DecPositionAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DecPositionAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DecPositionAction
         */
        public static fromObject(object: { [k: string]: any }): st.DecPositionAction;

        /**
         * Creates a plain object from a DecPositionAction message. Also converts values to other types if specified.
         * @param message DecPositionAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.DecPositionAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DecPositionAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenAction. */
    interface IOpenAction {

        /** OpenAction actionId */
        actionId?: (string|null);

        /** OpenAction actionType */
        actionType?: (st.StrategyActionType|null);

        /** OpenAction toAddTrade */
        toAddTrade?: (st.ITrade|null);
    }

    /** Represents an OpenAction. */
    class OpenAction implements IOpenAction {

        /**
         * Constructs a new OpenAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IOpenAction);

        /** OpenAction actionId. */
        public actionId: string;

        /** OpenAction actionType. */
        public actionType: st.StrategyActionType;

        /** OpenAction toAddTrade. */
        public toAddTrade?: (st.ITrade|null);

        /**
         * Creates a new OpenAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenAction instance
         */
        public static create(properties?: st.IOpenAction): st.OpenAction;

        /**
         * Encodes the specified OpenAction message. Does not implicitly {@link st.OpenAction.verify|verify} messages.
         * @param message OpenAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IOpenAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpenAction message, length delimited. Does not implicitly {@link st.OpenAction.verify|verify} messages.
         * @param message OpenAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IOpenAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.OpenAction;

        /**
         * Decodes an OpenAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.OpenAction;

        /**
         * Verifies an OpenAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenAction
         */
        public static fromObject(object: { [k: string]: any }): st.OpenAction;

        /**
         * Creates a plain object from an OpenAction message. Also converts values to other types if specified.
         * @param message OpenAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.OpenAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CloseAction. */
    interface ICloseAction {

        /** CloseAction actionId */
        actionId?: (string|null);

        /** CloseAction actionType */
        actionType?: (st.StrategyActionType|null);

        /** CloseAction toCloseTrade */
        toCloseTrade?: (st.ITrade|null);

        /** CloseAction signal */
        signal?: (st.IPositionModifySignal|null);
    }

    /** Represents a CloseAction. */
    class CloseAction implements ICloseAction {

        /**
         * Constructs a new CloseAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ICloseAction);

        /** CloseAction actionId. */
        public actionId: string;

        /** CloseAction actionType. */
        public actionType: st.StrategyActionType;

        /** CloseAction toCloseTrade. */
        public toCloseTrade?: (st.ITrade|null);

        /** CloseAction signal. */
        public signal?: (st.IPositionModifySignal|null);

        /**
         * Creates a new CloseAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseAction instance
         */
        public static create(properties?: st.ICloseAction): st.CloseAction;

        /**
         * Encodes the specified CloseAction message. Does not implicitly {@link st.CloseAction.verify|verify} messages.
         * @param message CloseAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ICloseAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseAction message, length delimited. Does not implicitly {@link st.CloseAction.verify|verify} messages.
         * @param message CloseAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ICloseAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.CloseAction;

        /**
         * Decodes a CloseAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.CloseAction;

        /**
         * Verifies a CloseAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseAction
         */
        public static fromObject(object: { [k: string]: any }): st.CloseAction;

        /**
         * Creates a plain object from a CloseAction message. Also converts values to other types if specified.
         * @param message CloseAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.CloseAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Action. */
    interface IAction {

        /** Action actionId */
        actionId?: (string|null);

        /** Action actionType */
        actionType?: (st.StrategyActionType|null);

        /** Action reason */
        reason?: (string|null);

        /** Action openAction */
        openAction?: (st.IOpenAction|null);

        /** Action closeAction */
        closeAction?: (st.ICloseAction|null);

        /** Action addAction */
        addAction?: (st.IAddPositionAction|null);

        /** Action decAction */
        decAction?: (st.IDecPositionAction|null);

        /** Action signal */
        signal?: (st.IPositionModifySignal|null);

        /** Action curProfitRatio */
        curProfitRatio?: (string|null);
    }

    /** Represents an Action. */
    class Action implements IAction {

        /**
         * Constructs a new Action.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IAction);

        /** Action actionId. */
        public actionId: string;

        /** Action actionType. */
        public actionType: st.StrategyActionType;

        /** Action reason. */
        public reason: string;

        /** Action openAction. */
        public openAction?: (st.IOpenAction|null);

        /** Action closeAction. */
        public closeAction?: (st.ICloseAction|null);

        /** Action addAction. */
        public addAction?: (st.IAddPositionAction|null);

        /** Action decAction. */
        public decAction?: (st.IDecPositionAction|null);

        /** Action signal. */
        public signal?: (st.IPositionModifySignal|null);

        /** Action curProfitRatio. */
        public curProfitRatio: string;

        /**
         * Creates a new Action instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action instance
         */
        public static create(properties?: st.IAction): st.Action;

        /**
         * Encodes the specified Action message. Does not implicitly {@link st.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link st.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.Action;

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.Action;

        /**
         * Verifies an Action message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Action
         */
        public static fromObject(object: { [k: string]: any }): st.Action;

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @param message Action
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Action to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FuturePlan. */
    interface IFuturePlan {

        /** FuturePlan planId */
        planId?: (string|null);

        /** FuturePlan openType */
        openType?: (st.FutureOpenType|null);

        /** FuturePlan coinFuture */
        coinFuture?: (st.ICoinFuture|null);

        /** FuturePlan planCont */
        planCont?: (number|null);

        /** FuturePlan dealCont */
        dealCont?: (number|null);

        /** FuturePlan planOpenPrice */
        planOpenPrice?: (string|null);

        /** FuturePlan dealOpenPrice */
        dealOpenPrice?: (string|null);

        /** FuturePlan planClosePrice */
        planClosePrice?: (string|null);

        /** FuturePlan dealClosePrice */
        dealClosePrice?: (string|null);

        /** FuturePlan planProfitRatio */
        planProfitRatio?: (string|null);

        /** FuturePlan openFee */
        openFee?: (string|null);

        /** FuturePlan closeFee */
        closeFee?: (string|null);

        /** FuturePlan openTradeList */
        openTradeList?: (st.ITrade[]|null);

        /** FuturePlan closeTradeList */
        closeTradeList?: (st.ITrade[]|null);

        /** FuturePlan state */
        state?: (st.PlanState|null);

        /** FuturePlan createTs */
        createTs?: (number|null);

        /** FuturePlan finishTs */
        finishTs?: (number|null);

        /** FuturePlan dataVersion */
        dataVersion?: (number|null);

        /** FuturePlan platform */
        platform?: (string|null);

        /** FuturePlan profit */
        profit?: (string|null);

        /** FuturePlan settleList */
        settleList?: (st.IFundingRateSettle[]|null);

        /** FuturePlan actionList */
        actionList?: (st.IAction[]|null);

        /** FuturePlan stillInOpenCont */
        stillInOpenCont?: (number|null);

        /** FuturePlan alreadyCloseCont */
        alreadyCloseCont?: (number|null);

        /** FuturePlan signalList */
        signalList?: (string[]|null);
    }

    /** Represents a FuturePlan. */
    class FuturePlan implements IFuturePlan {

        /**
         * Constructs a new FuturePlan.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.IFuturePlan);

        /** FuturePlan planId. */
        public planId: string;

        /** FuturePlan openType. */
        public openType: st.FutureOpenType;

        /** FuturePlan coinFuture. */
        public coinFuture?: (st.ICoinFuture|null);

        /** FuturePlan planCont. */
        public planCont: number;

        /** FuturePlan dealCont. */
        public dealCont: number;

        /** FuturePlan planOpenPrice. */
        public planOpenPrice: string;

        /** FuturePlan dealOpenPrice. */
        public dealOpenPrice: string;

        /** FuturePlan planClosePrice. */
        public planClosePrice: string;

        /** FuturePlan dealClosePrice. */
        public dealClosePrice: string;

        /** FuturePlan planProfitRatio. */
        public planProfitRatio: string;

        /** FuturePlan openFee. */
        public openFee: string;

        /** FuturePlan closeFee. */
        public closeFee: string;

        /** FuturePlan openTradeList. */
        public openTradeList: st.ITrade[];

        /** FuturePlan closeTradeList. */
        public closeTradeList: st.ITrade[];

        /** FuturePlan state. */
        public state: st.PlanState;

        /** FuturePlan createTs. */
        public createTs: number;

        /** FuturePlan finishTs. */
        public finishTs: number;

        /** FuturePlan dataVersion. */
        public dataVersion: number;

        /** FuturePlan platform. */
        public platform: string;

        /** FuturePlan profit. */
        public profit: string;

        /** FuturePlan settleList. */
        public settleList: st.IFundingRateSettle[];

        /** FuturePlan actionList. */
        public actionList: st.IAction[];

        /** FuturePlan stillInOpenCont. */
        public stillInOpenCont: number;

        /** FuturePlan alreadyCloseCont. */
        public alreadyCloseCont: number;

        /** FuturePlan signalList. */
        public signalList: string[];

        /**
         * Creates a new FuturePlan instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FuturePlan instance
         */
        public static create(properties?: st.IFuturePlan): st.FuturePlan;

        /**
         * Encodes the specified FuturePlan message. Does not implicitly {@link st.FuturePlan.verify|verify} messages.
         * @param message FuturePlan message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.IFuturePlan, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FuturePlan message, length delimited. Does not implicitly {@link st.FuturePlan.verify|verify} messages.
         * @param message FuturePlan message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.IFuturePlan, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FuturePlan message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FuturePlan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.FuturePlan;

        /**
         * Decodes a FuturePlan message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FuturePlan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.FuturePlan;

        /**
         * Verifies a FuturePlan message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FuturePlan message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FuturePlan
         */
        public static fromObject(object: { [k: string]: any }): st.FuturePlan;

        /**
         * Creates a plain object from a FuturePlan message. Also converts values to other types if specified.
         * @param message FuturePlan
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.FuturePlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FuturePlan to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** TradeLogType enum. */
    enum TradeLogType {
        NORMAL_LOG = 0,
        CREATE_TRADE = 1,
        CANCEL_TRADE = 2,
        DEAL_TRADE = 3,
        PLAN_OPEN = 4,
        PLAN_OVER = 5
    }

    /** Properties of a TradeLog. */
    interface ITradeLog {

        /** TradeLog id */
        id?: (string|null);

        /** TradeLog symbolId */
        symbolId?: (string|null);

        /** TradeLog type */
        type?: (st.TradeLogType|null);

        /** TradeLog tradeSubState */
        tradeSubState?: (st.TradeSubState|null);

        /** TradeLog info */
        info?: (string|null);

        /** TradeLog tsUsec */
        tsUsec?: (number|null);

        /** TradeLog date */
        date?: (string|null);

        /** TradeLog targetPrice */
        targetPrice?: (string|null);

        /** TradeLog dealPrice */
        dealPrice?: (string|null);

        /** TradeLog targetQty */
        targetQty?: (string|null);

        /** TradeLog dealQty */
        dealQty?: (string|null);

        /** TradeLog curProfit */
        curProfit?: (string|null);

        /** TradeLog futureOpenType */
        futureOpenType?: (st.FutureOpenType|null);

        /** TradeLog tradeDir */
        tradeDir?: (st.TradeDir|null);

        /** TradeLog accProfit */
        accProfit?: (string|null);
    }

    /** Represents a TradeLog. */
    class TradeLog implements ITradeLog {

        /**
         * Constructs a new TradeLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ITradeLog);

        /** TradeLog id. */
        public id: string;

        /** TradeLog symbolId. */
        public symbolId: string;

        /** TradeLog type. */
        public type: st.TradeLogType;

        /** TradeLog tradeSubState. */
        public tradeSubState: st.TradeSubState;

        /** TradeLog info. */
        public info: string;

        /** TradeLog tsUsec. */
        public tsUsec: number;

        /** TradeLog date. */
        public date: string;

        /** TradeLog targetPrice. */
        public targetPrice: string;

        /** TradeLog dealPrice. */
        public dealPrice: string;

        /** TradeLog targetQty. */
        public targetQty: string;

        /** TradeLog dealQty. */
        public dealQty: string;

        /** TradeLog curProfit. */
        public curProfit: string;

        /** TradeLog futureOpenType. */
        public futureOpenType: st.FutureOpenType;

        /** TradeLog tradeDir. */
        public tradeDir: st.TradeDir;

        /** TradeLog accProfit. */
        public accProfit: string;

        /**
         * Creates a new TradeLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeLog instance
         */
        public static create(properties?: st.ITradeLog): st.TradeLog;

        /**
         * Encodes the specified TradeLog message. Does not implicitly {@link st.TradeLog.verify|verify} messages.
         * @param message TradeLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ITradeLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeLog message, length delimited. Does not implicitly {@link st.TradeLog.verify|verify} messages.
         * @param message TradeLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ITradeLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.TradeLog;

        /**
         * Decodes a TradeLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.TradeLog;

        /**
         * Verifies a TradeLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeLog
         */
        public static fromObject(object: { [k: string]: any }): st.TradeLog;

        /**
         * Creates a plain object from a TradeLog message. Also converts values to other types if specified.
         * @param message TradeLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.TradeLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TradeSummary. */
    interface ITradeSummary {

        /** TradeSummary summaryId */
        summaryId?: (string|null);

        /** TradeSummary profit */
        profit?: (string|null);

        /** TradeSummary releatedSymbolId */
        releatedSymbolId?: (string[]|null);

        /** TradeSummary dataIndex */
        dataIndex?: (marketdata.IHistoryMarketDataIndex[]|null);

        /** TradeSummary logs */
        logs?: (st.ITradeLog[]|null);

        /** TradeSummary totalCnt */
        totalCnt?: (number|null);

        /** TradeSummary successCnt */
        successCnt?: (number|null);

        /** TradeSummary successRatio */
        successRatio?: (number|null);

        /** TradeSummary avgProfit */
        avgProfit?: (number|null);

        /** TradeSummary avgLoss */
        avgLoss?: (number|null);

        /** TradeSummary profitLossRatio */
        profitLossRatio?: (number|null);

        /** TradeSummary startUsec */
        startUsec?: (number|null);

        /** TradeSummary endUsec */
        endUsec?: (number|null);
    }

    /** Represents a TradeSummary. */
    class TradeSummary implements ITradeSummary {

        /**
         * Constructs a new TradeSummary.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ITradeSummary);

        /** TradeSummary summaryId. */
        public summaryId: string;

        /** TradeSummary profit. */
        public profit: string;

        /** TradeSummary releatedSymbolId. */
        public releatedSymbolId: string[];

        /** TradeSummary dataIndex. */
        public dataIndex: marketdata.IHistoryMarketDataIndex[];

        /** TradeSummary logs. */
        public logs: st.ITradeLog[];

        /** TradeSummary totalCnt. */
        public totalCnt: number;

        /** TradeSummary successCnt. */
        public successCnt: number;

        /** TradeSummary successRatio. */
        public successRatio: number;

        /** TradeSummary avgProfit. */
        public avgProfit: number;

        /** TradeSummary avgLoss. */
        public avgLoss: number;

        /** TradeSummary profitLossRatio. */
        public profitLossRatio: number;

        /** TradeSummary startUsec. */
        public startUsec: number;

        /** TradeSummary endUsec. */
        public endUsec: number;

        /**
         * Creates a new TradeSummary instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeSummary instance
         */
        public static create(properties?: st.ITradeSummary): st.TradeSummary;

        /**
         * Encodes the specified TradeSummary message. Does not implicitly {@link st.TradeSummary.verify|verify} messages.
         * @param message TradeSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ITradeSummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeSummary message, length delimited. Does not implicitly {@link st.TradeSummary.verify|verify} messages.
         * @param message TradeSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ITradeSummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeSummary message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.TradeSummary;

        /**
         * Decodes a TradeSummary message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.TradeSummary;

        /**
         * Verifies a TradeSummary message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeSummary message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeSummary
         */
        public static fromObject(object: { [k: string]: any }): st.TradeSummary;

        /**
         * Creates a plain object from a TradeSummary message. Also converts values to other types if specified.
         * @param message TradeSummary
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.TradeSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeSummary to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TradeMeta. */
    interface ITradeMeta {

        /** TradeMeta ticker */
        ticker?: (string|null);

        /** TradeMeta summaryId */
        summaryId?: (string|null);

        /** TradeMeta symbolInfo */
        symbolInfo?: (string|null);
    }

    /** Represents a TradeMeta. */
    class TradeMeta implements ITradeMeta {

        /**
         * Constructs a new TradeMeta.
         * @param [properties] Properties to set
         */
        constructor(properties?: st.ITradeMeta);

        /** TradeMeta ticker. */
        public ticker: string;

        /** TradeMeta summaryId. */
        public summaryId: string;

        /** TradeMeta symbolInfo. */
        public symbolInfo: string;

        /**
         * Creates a new TradeMeta instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeMeta instance
         */
        public static create(properties?: st.ITradeMeta): st.TradeMeta;

        /**
         * Encodes the specified TradeMeta message. Does not implicitly {@link st.TradeMeta.verify|verify} messages.
         * @param message TradeMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: st.ITradeMeta, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeMeta message, length delimited. Does not implicitly {@link st.TradeMeta.verify|verify} messages.
         * @param message TradeMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: st.ITradeMeta, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeMeta message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): st.TradeMeta;

        /**
         * Decodes a TradeMeta message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): st.TradeMeta;

        /**
         * Verifies a TradeMeta message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeMeta message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeMeta
         */
        public static fromObject(object: { [k: string]: any }): st.TradeMeta;

        /**
         * Creates a plain object from a TradeMeta message. Also converts values to other types if specified.
         * @param message TradeMeta
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: st.TradeMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeMeta to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace strategyparameter. */
export namespace strategyparameter {

    /** Properties of a RapidTradeTriggerParameter. */
    interface IRapidTradeTriggerParameter {

        /** RapidTradeTriggerParameter future */
        future?: (st.ICoinFuture|null);

        /** RapidTradeTriggerParameter preKlineDownBdTh */
        preKlineDownBdTh?: (string|null);

        /** RapidTradeTriggerParameter curKlineUpBdTh */
        curKlineUpBdTh?: (string|null);

        /** RapidTradeTriggerParameter preKlineUpBuTh */
        preKlineUpBuTh?: (string|null);

        /** RapidTradeTriggerParameter curKlineDownBuTh */
        curKlineDownBuTh?: (string|null);

        /** RapidTradeTriggerParameter baseCont */
        baseCont?: (number|null);

        /** RapidTradeTriggerParameter targetProfitRatio */
        targetProfitRatio?: (string|null);

        /** RapidTradeTriggerParameter rsiExceedBidTh */
        rsiExceedBidTh?: (string|null);

        /** RapidTradeTriggerParameter rsiExceedAskTh */
        rsiExceedAskTh?: (string|null);

        /** RapidTradeTriggerParameter beginCloseProfitRatio */
        beginCloseProfitRatio?: (string|null);

        /** RapidTradeTriggerParameter canAddLossProfitRatio */
        canAddLossProfitRatio?: (string|null);

        /** RapidTradeTriggerParameter maxOpenCont */
        maxOpenCont?: (number|null);

        /** RapidTradeTriggerParameter decWaitInterval */
        decWaitInterval?: (number|null);

        /** RapidTradeTriggerParameter addWaitInterval */
        addWaitInterval?: (number|null);

        /** RapidTradeTriggerParameter beginDecInterval */
        beginDecInterval?: (number|null);

        /** RapidTradeTriggerParameter canDecLossProfitRatio */
        canDecLossProfitRatio?: (string|null);

        /** RapidTradeTriggerParameter shouldQuickCloseRatio */
        shouldQuickCloseRatio?: (string|null);
    }

    /** Represents a RapidTradeTriggerParameter. */
    class RapidTradeTriggerParameter implements IRapidTradeTriggerParameter {

        /**
         * Constructs a new RapidTradeTriggerParameter.
         * @param [properties] Properties to set
         */
        constructor(properties?: strategyparameter.IRapidTradeTriggerParameter);

        /** RapidTradeTriggerParameter future. */
        public future?: (st.ICoinFuture|null);

        /** RapidTradeTriggerParameter preKlineDownBdTh. */
        public preKlineDownBdTh: string;

        /** RapidTradeTriggerParameter curKlineUpBdTh. */
        public curKlineUpBdTh: string;

        /** RapidTradeTriggerParameter preKlineUpBuTh. */
        public preKlineUpBuTh: string;

        /** RapidTradeTriggerParameter curKlineDownBuTh. */
        public curKlineDownBuTh: string;

        /** RapidTradeTriggerParameter baseCont. */
        public baseCont: number;

        /** RapidTradeTriggerParameter targetProfitRatio. */
        public targetProfitRatio: string;

        /** RapidTradeTriggerParameter rsiExceedBidTh. */
        public rsiExceedBidTh: string;

        /** RapidTradeTriggerParameter rsiExceedAskTh. */
        public rsiExceedAskTh: string;

        /** RapidTradeTriggerParameter beginCloseProfitRatio. */
        public beginCloseProfitRatio: string;

        /** RapidTradeTriggerParameter canAddLossProfitRatio. */
        public canAddLossProfitRatio: string;

        /** RapidTradeTriggerParameter maxOpenCont. */
        public maxOpenCont: number;

        /** RapidTradeTriggerParameter decWaitInterval. */
        public decWaitInterval: number;

        /** RapidTradeTriggerParameter addWaitInterval. */
        public addWaitInterval: number;

        /** RapidTradeTriggerParameter beginDecInterval. */
        public beginDecInterval: number;

        /** RapidTradeTriggerParameter canDecLossProfitRatio. */
        public canDecLossProfitRatio: string;

        /** RapidTradeTriggerParameter shouldQuickCloseRatio. */
        public shouldQuickCloseRatio: string;

        /**
         * Creates a new RapidTradeTriggerParameter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RapidTradeTriggerParameter instance
         */
        public static create(properties?: strategyparameter.IRapidTradeTriggerParameter): strategyparameter.RapidTradeTriggerParameter;

        /**
         * Encodes the specified RapidTradeTriggerParameter message. Does not implicitly {@link strategyparameter.RapidTradeTriggerParameter.verify|verify} messages.
         * @param message RapidTradeTriggerParameter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: strategyparameter.IRapidTradeTriggerParameter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RapidTradeTriggerParameter message, length delimited. Does not implicitly {@link strategyparameter.RapidTradeTriggerParameter.verify|verify} messages.
         * @param message RapidTradeTriggerParameter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: strategyparameter.IRapidTradeTriggerParameter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RapidTradeTriggerParameter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RapidTradeTriggerParameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): strategyparameter.RapidTradeTriggerParameter;

        /**
         * Decodes a RapidTradeTriggerParameter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RapidTradeTriggerParameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): strategyparameter.RapidTradeTriggerParameter;

        /**
         * Verifies a RapidTradeTriggerParameter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RapidTradeTriggerParameter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RapidTradeTriggerParameter
         */
        public static fromObject(object: { [k: string]: any }): strategyparameter.RapidTradeTriggerParameter;

        /**
         * Creates a plain object from a RapidTradeTriggerParameter message. Also converts values to other types if specified.
         * @param message RapidTradeTriggerParameter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: strategyparameter.RapidTradeTriggerParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RapidTradeTriggerParameter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace marketdata. */
export namespace marketdata {

    /** TakerType enum. */
    enum TakerType {
        DEFAULT_TAKER_TYPE = 0,
        TAKER_BID = 1,
        TAKER_ASK = 2
    }

    /** Properties of a TradeResult. */
    interface ITradeResult {

        /** TradeResult takerType */
        takerType?: (marketdata.TakerType|null);

        /** TradeResult coinFuture */
        coinFuture?: (st.ICoinFuture|null);

        /** TradeResult dealCont */
        dealCont?: (number|null);

        /** TradeResult dealPrice */
        dealPrice?: (string|null);

        /** TradeResult eventTs */
        eventTs?: (number|null);
    }

    /** Represents a TradeResult. */
    class TradeResult implements ITradeResult {

        /**
         * Constructs a new TradeResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: marketdata.ITradeResult);

        /** TradeResult takerType. */
        public takerType: marketdata.TakerType;

        /** TradeResult coinFuture. */
        public coinFuture?: (st.ICoinFuture|null);

        /** TradeResult dealCont. */
        public dealCont: number;

        /** TradeResult dealPrice. */
        public dealPrice: string;

        /** TradeResult eventTs. */
        public eventTs: number;

        /**
         * Creates a new TradeResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeResult instance
         */
        public static create(properties?: marketdata.ITradeResult): marketdata.TradeResult;

        /**
         * Encodes the specified TradeResult message. Does not implicitly {@link marketdata.TradeResult.verify|verify} messages.
         * @param message TradeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: marketdata.ITradeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeResult message, length delimited. Does not implicitly {@link marketdata.TradeResult.verify|verify} messages.
         * @param message TradeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: marketdata.ITradeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): marketdata.TradeResult;

        /**
         * Decodes a TradeResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): marketdata.TradeResult;

        /**
         * Verifies a TradeResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeResult
         */
        public static fromObject(object: { [k: string]: any }): marketdata.TradeResult;

        /**
         * Creates a plain object from a TradeResult message. Also converts values to other types if specified.
         * @param message TradeResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: marketdata.TradeResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** KlineType enum. */
    enum KlineType {
        DEFAULT_KLINE_TYPE = 0,
        KLINE_MIN = 1,
        KLINE_15MIN = 2,
        KLINE_HOUR = 3,
        KLINE_DAY = 4,
        KLINE_WEEK = 5,
        KLINE_MONTH = 6
    }

    /** Properties of a Kline. */
    interface IKline {

        /** Kline future */
        future?: (st.ICoinFuture|null);

        /** Kline type */
        type?: (marketdata.KlineType|null);

        /** Kline startTs */
        startTs?: (number|null);

        /** Kline endTs */
        endTs?: (number|null);

        /** Kline open */
        open?: (string|null);

        /** Kline close */
        close?: (string|null);

        /** Kline high */
        high?: (string|null);

        /** Kline low */
        low?: (string|null);

        /** Kline volume */
        volume?: (number|null);

        /** Kline turnover */
        turnover?: (string|null);

        /** Kline ts */
        ts?: (number|null);

        /** Kline confirm */
        confirm?: (boolean|null);
    }

    /** Represents a Kline. */
    class Kline implements IKline {

        /**
         * Constructs a new Kline.
         * @param [properties] Properties to set
         */
        constructor(properties?: marketdata.IKline);

        /** Kline future. */
        public future?: (st.ICoinFuture|null);

        /** Kline type. */
        public type: marketdata.KlineType;

        /** Kline startTs. */
        public startTs: number;

        /** Kline endTs. */
        public endTs: number;

        /** Kline open. */
        public open: string;

        /** Kline close. */
        public close: string;

        /** Kline high. */
        public high: string;

        /** Kline low. */
        public low: string;

        /** Kline volume. */
        public volume: number;

        /** Kline turnover. */
        public turnover: string;

        /** Kline ts. */
        public ts: number;

        /** Kline confirm. */
        public confirm: boolean;

        /**
         * Creates a new Kline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Kline instance
         */
        public static create(properties?: marketdata.IKline): marketdata.Kline;

        /**
         * Encodes the specified Kline message. Does not implicitly {@link marketdata.Kline.verify|verify} messages.
         * @param message Kline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: marketdata.IKline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Kline message, length delimited. Does not implicitly {@link marketdata.Kline.verify|verify} messages.
         * @param message Kline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: marketdata.IKline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Kline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Kline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): marketdata.Kline;

        /**
         * Decodes a Kline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Kline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): marketdata.Kline;

        /**
         * Verifies a Kline message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Kline message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Kline
         */
        public static fromObject(object: { [k: string]: any }): marketdata.Kline;

        /**
         * Creates a plain object from a Kline message. Also converts values to other types if specified.
         * @param message Kline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: marketdata.Kline, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Kline to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HistoryMarketDataIndex. */
    interface IHistoryMarketDataIndex {

        /** HistoryMarketDataIndex symbolId */
        symbolId?: (string|null);

        /** HistoryMarketDataIndex savePath */
        savePath?: (string|null);

        /** HistoryMarketDataIndex desc */
        desc?: (string|null);
    }

    /** Represents a HistoryMarketDataIndex. */
    class HistoryMarketDataIndex implements IHistoryMarketDataIndex {

        /**
         * Constructs a new HistoryMarketDataIndex.
         * @param [properties] Properties to set
         */
        constructor(properties?: marketdata.IHistoryMarketDataIndex);

        /** HistoryMarketDataIndex symbolId. */
        public symbolId: string;

        /** HistoryMarketDataIndex savePath. */
        public savePath: string;

        /** HistoryMarketDataIndex desc. */
        public desc: string;

        /**
         * Creates a new HistoryMarketDataIndex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryMarketDataIndex instance
         */
        public static create(properties?: marketdata.IHistoryMarketDataIndex): marketdata.HistoryMarketDataIndex;

        /**
         * Encodes the specified HistoryMarketDataIndex message. Does not implicitly {@link marketdata.HistoryMarketDataIndex.verify|verify} messages.
         * @param message HistoryMarketDataIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: marketdata.IHistoryMarketDataIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistoryMarketDataIndex message, length delimited. Does not implicitly {@link marketdata.HistoryMarketDataIndex.verify|verify} messages.
         * @param message HistoryMarketDataIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: marketdata.IHistoryMarketDataIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryMarketDataIndex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryMarketDataIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): marketdata.HistoryMarketDataIndex;

        /**
         * Decodes a HistoryMarketDataIndex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HistoryMarketDataIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): marketdata.HistoryMarketDataIndex;

        /**
         * Verifies a HistoryMarketDataIndex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistoryMarketDataIndex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistoryMarketDataIndex
         */
        public static fromObject(object: { [k: string]: any }): marketdata.HistoryMarketDataIndex;

        /**
         * Creates a plain object from a HistoryMarketDataIndex message. Also converts values to other types if specified.
         * @param message HistoryMarketDataIndex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: marketdata.HistoryMarketDataIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistoryMarketDataIndex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .st.redisTableName */
            ".st.redisTableName"?: (string|null);

            /** MessageOptions .st.primaryKeyField */
            ".st.primaryKeyField"?: (string|null);

            /** MessageOptions .st.redisUnfinishedSetName */
            ".st.redisUnfinishedSetName"?: (string|null);

            /** MessageOptions .st.redisFinishedSetName */
            ".st.redisFinishedSetName"?: (string|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .st.mustNotEmpty */
            ".st.mustNotEmpty"?: (boolean|null);

            /** FieldOptions .st.lengthMin */
            ".st.lengthMin"?: (number|null);

            /** FieldOptions .st.lengthMax */
            ".st.lengthMax"?: (number|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: number;

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: number;

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace strategystatis. */
export namespace strategystatis {

    /** Properties of a TradeTrendStatis. */
    interface ITradeTrendStatis {

        /** TradeTrendStatis tradeCnt */
        tradeCnt?: (number|null);

        /** TradeTrendStatis takerBidCnt */
        takerBidCnt?: (number|null);

        /** TradeTrendStatis takerAskCnt */
        takerAskCnt?: (number|null);

        /** TradeTrendStatis bidAskVaryCnt */
        bidAskVaryCnt?: (number|null);

        /** TradeTrendStatis priceVaryRatio */
        priceVaryRatio?: (string|null);
    }

    /** Represents a TradeTrendStatis. */
    class TradeTrendStatis implements ITradeTrendStatis {

        /**
         * Constructs a new TradeTrendStatis.
         * @param [properties] Properties to set
         */
        constructor(properties?: strategystatis.ITradeTrendStatis);

        /** TradeTrendStatis tradeCnt. */
        public tradeCnt: number;

        /** TradeTrendStatis takerBidCnt. */
        public takerBidCnt: number;

        /** TradeTrendStatis takerAskCnt. */
        public takerAskCnt: number;

        /** TradeTrendStatis bidAskVaryCnt. */
        public bidAskVaryCnt: number;

        /** TradeTrendStatis priceVaryRatio. */
        public priceVaryRatio: string;

        /**
         * Creates a new TradeTrendStatis instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeTrendStatis instance
         */
        public static create(properties?: strategystatis.ITradeTrendStatis): strategystatis.TradeTrendStatis;

        /**
         * Encodes the specified TradeTrendStatis message. Does not implicitly {@link strategystatis.TradeTrendStatis.verify|verify} messages.
         * @param message TradeTrendStatis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: strategystatis.ITradeTrendStatis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeTrendStatis message, length delimited. Does not implicitly {@link strategystatis.TradeTrendStatis.verify|verify} messages.
         * @param message TradeTrendStatis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: strategystatis.ITradeTrendStatis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeTrendStatis message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeTrendStatis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): strategystatis.TradeTrendStatis;

        /**
         * Decodes a TradeTrendStatis message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeTrendStatis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): strategystatis.TradeTrendStatis;

        /**
         * Verifies a TradeTrendStatis message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeTrendStatis message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeTrendStatis
         */
        public static fromObject(object: { [k: string]: any }): strategystatis.TradeTrendStatis;

        /**
         * Creates a plain object from a TradeTrendStatis message. Also converts values to other types if specified.
         * @param message TradeTrendStatis
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: strategystatis.TradeTrendStatis, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeTrendStatis to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TradeTrendWindowStatis. */
    interface ITradeTrendWindowStatis {

        /** TradeTrendWindowStatis varyWindowCnt */
        varyWindowCnt?: (number|null);

        /** TradeTrendWindowStatis priceVaryRatio */
        priceVaryRatio?: (number|null);
    }

    /** Represents a TradeTrendWindowStatis. */
    class TradeTrendWindowStatis implements ITradeTrendWindowStatis {

        /**
         * Constructs a new TradeTrendWindowStatis.
         * @param [properties] Properties to set
         */
        constructor(properties?: strategystatis.ITradeTrendWindowStatis);

        /** TradeTrendWindowStatis varyWindowCnt. */
        public varyWindowCnt: number;

        /** TradeTrendWindowStatis priceVaryRatio. */
        public priceVaryRatio: number;

        /**
         * Creates a new TradeTrendWindowStatis instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeTrendWindowStatis instance
         */
        public static create(properties?: strategystatis.ITradeTrendWindowStatis): strategystatis.TradeTrendWindowStatis;

        /**
         * Encodes the specified TradeTrendWindowStatis message. Does not implicitly {@link strategystatis.TradeTrendWindowStatis.verify|verify} messages.
         * @param message TradeTrendWindowStatis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: strategystatis.ITradeTrendWindowStatis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeTrendWindowStatis message, length delimited. Does not implicitly {@link strategystatis.TradeTrendWindowStatis.verify|verify} messages.
         * @param message TradeTrendWindowStatis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: strategystatis.ITradeTrendWindowStatis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeTrendWindowStatis message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeTrendWindowStatis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): strategystatis.TradeTrendWindowStatis;

        /**
         * Decodes a TradeTrendWindowStatis message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeTrendWindowStatis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): strategystatis.TradeTrendWindowStatis;

        /**
         * Verifies a TradeTrendWindowStatis message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeTrendWindowStatis message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeTrendWindowStatis
         */
        public static fromObject(object: { [k: string]: any }): strategystatis.TradeTrendWindowStatis;

        /**
         * Creates a plain object from a TradeTrendWindowStatis message. Also converts values to other types if specified.
         * @param message TradeTrendWindowStatis
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: strategystatis.TradeTrendWindowStatis, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeTrendWindowStatis to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace datatype. */
export namespace datatype {

    /** Properties of an Exchange. */
    interface IExchange {

        /** Exchange value */
        value?: (string|null);

        /** Exchange name */
        name?: (string|null);

        /** Exchange desc */
        desc?: (string|null);
    }

    /** Represents an Exchange. */
    class Exchange implements IExchange {

        /**
         * Constructs a new Exchange.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IExchange);

        /** Exchange value. */
        public value: string;

        /** Exchange name. */
        public name: string;

        /** Exchange desc. */
        public desc: string;

        /**
         * Creates a new Exchange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Exchange instance
         */
        public static create(properties?: datatype.IExchange): datatype.Exchange;

        /**
         * Encodes the specified Exchange message. Does not implicitly {@link datatype.Exchange.verify|verify} messages.
         * @param message Exchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IExchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Exchange message, length delimited. Does not implicitly {@link datatype.Exchange.verify|verify} messages.
         * @param message Exchange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IExchange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Exchange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Exchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.Exchange;

        /**
         * Decodes an Exchange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Exchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.Exchange;

        /**
         * Verifies an Exchange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Exchange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Exchange
         */
        public static fromObject(object: { [k: string]: any }): datatype.Exchange;

        /**
         * Creates a plain object from an Exchange message. Also converts values to other types if specified.
         * @param message Exchange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.Exchange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Exchange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConfigReq. */
    interface IConfigReq {

        /** ConfigReq source */
        source?: (string|null);
    }

    /** Represents a ConfigReq. */
    class ConfigReq implements IConfigReq {

        /**
         * Constructs a new ConfigReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IConfigReq);

        /** ConfigReq source. */
        public source: string;

        /**
         * Creates a new ConfigReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfigReq instance
         */
        public static create(properties?: datatype.IConfigReq): datatype.ConfigReq;

        /**
         * Encodes the specified ConfigReq message. Does not implicitly {@link datatype.ConfigReq.verify|verify} messages.
         * @param message ConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfigReq message, length delimited. Does not implicitly {@link datatype.ConfigReq.verify|verify} messages.
         * @param message ConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfigReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.ConfigReq;

        /**
         * Decodes a ConfigReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.ConfigReq;

        /**
         * Verifies a ConfigReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfigReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfigReq
         */
        public static fromObject(object: { [k: string]: any }): datatype.ConfigReq;

        /**
         * Creates a plain object from a ConfigReq message. Also converts values to other types if specified.
         * @param message ConfigReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.ConfigReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfigReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConfigResp. */
    interface IConfigResp {

        /** ConfigResp supportsSearch */
        supportsSearch?: (boolean|null);

        /** ConfigResp supportsGroupRequest */
        supportsGroupRequest?: (boolean|null);

        /** ConfigResp supportedResolutions */
        supportedResolutions?: (string[]|null);

        /** ConfigResp supportsMarks */
        supportsMarks?: (boolean|null);

        /** ConfigResp supportsTime */
        supportsTime?: (boolean|null);

        /** ConfigResp exchanges */
        exchanges?: (datatype.IExchange[]|null);

        /** ConfigResp symbolsTypes */
        symbolsTypes?: (string[]|null);

        /** ConfigResp currencyCodes */
        currencyCodes?: (string[]|null);

        /** ConfigResp supportsTimescaleMark */
        supportsTimescaleMark?: (boolean|null);

        /** ConfigResp futuresRegex */
        futuresRegex?: (string|null);
    }

    /** Represents a ConfigResp. */
    class ConfigResp implements IConfigResp {

        /**
         * Constructs a new ConfigResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IConfigResp);

        /** ConfigResp supportsSearch. */
        public supportsSearch: boolean;

        /** ConfigResp supportsGroupRequest. */
        public supportsGroupRequest: boolean;

        /** ConfigResp supportedResolutions. */
        public supportedResolutions: string[];

        /** ConfigResp supportsMarks. */
        public supportsMarks: boolean;

        /** ConfigResp supportsTime. */
        public supportsTime: boolean;

        /** ConfigResp exchanges. */
        public exchanges: datatype.IExchange[];

        /** ConfigResp symbolsTypes. */
        public symbolsTypes: string[];

        /** ConfigResp currencyCodes. */
        public currencyCodes: string[];

        /** ConfigResp supportsTimescaleMark. */
        public supportsTimescaleMark: boolean;

        /** ConfigResp futuresRegex. */
        public futuresRegex: string;

        /**
         * Creates a new ConfigResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfigResp instance
         */
        public static create(properties?: datatype.IConfigResp): datatype.ConfigResp;

        /**
         * Encodes the specified ConfigResp message. Does not implicitly {@link datatype.ConfigResp.verify|verify} messages.
         * @param message ConfigResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IConfigResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfigResp message, length delimited. Does not implicitly {@link datatype.ConfigResp.verify|verify} messages.
         * @param message ConfigResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IConfigResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfigResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfigResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.ConfigResp;

        /**
         * Decodes a ConfigResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfigResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.ConfigResp;

        /**
         * Verifies a ConfigResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfigResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfigResp
         */
        public static fromObject(object: { [k: string]: any }): datatype.ConfigResp;

        /**
         * Creates a plain object from a ConfigResp message. Also converts values to other types if specified.
         * @param message ConfigResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.ConfigResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfigResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SymbolGroupInfoReq. */
    interface ISymbolGroupInfoReq {

        /** SymbolGroupInfoReq group */
        group?: (string|null);

        /** SymbolGroupInfoReq source */
        source?: (string|null);
    }

    /** Represents a SymbolGroupInfoReq. */
    class SymbolGroupInfoReq implements ISymbolGroupInfoReq {

        /**
         * Constructs a new SymbolGroupInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.ISymbolGroupInfoReq);

        /** SymbolGroupInfoReq group. */
        public group: string;

        /** SymbolGroupInfoReq source. */
        public source: string;

        /**
         * Creates a new SymbolGroupInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymbolGroupInfoReq instance
         */
        public static create(properties?: datatype.ISymbolGroupInfoReq): datatype.SymbolGroupInfoReq;

        /**
         * Encodes the specified SymbolGroupInfoReq message. Does not implicitly {@link datatype.SymbolGroupInfoReq.verify|verify} messages.
         * @param message SymbolGroupInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.ISymbolGroupInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymbolGroupInfoReq message, length delimited. Does not implicitly {@link datatype.SymbolGroupInfoReq.verify|verify} messages.
         * @param message SymbolGroupInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.ISymbolGroupInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymbolGroupInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymbolGroupInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.SymbolGroupInfoReq;

        /**
         * Decodes a SymbolGroupInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymbolGroupInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.SymbolGroupInfoReq;

        /**
         * Verifies a SymbolGroupInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymbolGroupInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymbolGroupInfoReq
         */
        public static fromObject(object: { [k: string]: any }): datatype.SymbolGroupInfoReq;

        /**
         * Creates a plain object from a SymbolGroupInfoReq message. Also converts values to other types if specified.
         * @param message SymbolGroupInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.SymbolGroupInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymbolGroupInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SymbolGroupInfoResp. */
    interface ISymbolGroupInfoResp {

        /** SymbolGroupInfoResp symbol */
        symbol?: (string[]|null);

        /** SymbolGroupInfoResp desceiption */
        desceiption?: (string[]|null);

        /** SymbolGroupInfoResp exchangeListed */
        exchangeListed?: (string|null);

        /** SymbolGroupInfoResp minmov */
        minmov?: (number|null);

        /** SymbolGroupInfoResp minmov2 */
        minmov2?: (number|null);

        /** SymbolGroupInfoResp pricescale */
        pricescale?: (number[]|null);

        /** SymbolGroupInfoResp hasDwm */
        hasDwm?: (boolean|null);

        /** SymbolGroupInfoResp hasIntraday */
        hasIntraday?: (boolean|null);

        /** SymbolGroupInfoResp hasNoVolume */
        hasNoVolume?: (boolean[]|null);

        /** SymbolGroupInfoResp type */
        type?: (string[]|null);

        /** SymbolGroupInfoResp ticker */
        ticker?: (string[]|null);

        /** SymbolGroupInfoResp timezone */
        timezone?: (string|null);

        /** SymbolGroupInfoResp sessionRegular */
        sessionRegular?: (string|null);
    }

    /** Represents a SymbolGroupInfoResp. */
    class SymbolGroupInfoResp implements ISymbolGroupInfoResp {

        /**
         * Constructs a new SymbolGroupInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.ISymbolGroupInfoResp);

        /** SymbolGroupInfoResp symbol. */
        public symbol: string[];

        /** SymbolGroupInfoResp desceiption. */
        public desceiption: string[];

        /** SymbolGroupInfoResp exchangeListed. */
        public exchangeListed: string;

        /** SymbolGroupInfoResp minmov. */
        public minmov: number;

        /** SymbolGroupInfoResp minmov2. */
        public minmov2: number;

        /** SymbolGroupInfoResp pricescale. */
        public pricescale: number[];

        /** SymbolGroupInfoResp hasDwm. */
        public hasDwm: boolean;

        /** SymbolGroupInfoResp hasIntraday. */
        public hasIntraday: boolean;

        /** SymbolGroupInfoResp hasNoVolume. */
        public hasNoVolume: boolean[];

        /** SymbolGroupInfoResp type. */
        public type: string[];

        /** SymbolGroupInfoResp ticker. */
        public ticker: string[];

        /** SymbolGroupInfoResp timezone. */
        public timezone: string;

        /** SymbolGroupInfoResp sessionRegular. */
        public sessionRegular: string;

        /**
         * Creates a new SymbolGroupInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymbolGroupInfoResp instance
         */
        public static create(properties?: datatype.ISymbolGroupInfoResp): datatype.SymbolGroupInfoResp;

        /**
         * Encodes the specified SymbolGroupInfoResp message. Does not implicitly {@link datatype.SymbolGroupInfoResp.verify|verify} messages.
         * @param message SymbolGroupInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.ISymbolGroupInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymbolGroupInfoResp message, length delimited. Does not implicitly {@link datatype.SymbolGroupInfoResp.verify|verify} messages.
         * @param message SymbolGroupInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.ISymbolGroupInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymbolGroupInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymbolGroupInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.SymbolGroupInfoResp;

        /**
         * Decodes a SymbolGroupInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymbolGroupInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.SymbolGroupInfoResp;

        /**
         * Verifies a SymbolGroupInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymbolGroupInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymbolGroupInfoResp
         */
        public static fromObject(object: { [k: string]: any }): datatype.SymbolGroupInfoResp;

        /**
         * Creates a plain object from a SymbolGroupInfoResp message. Also converts values to other types if specified.
         * @param message SymbolGroupInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.SymbolGroupInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymbolGroupInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SymbolInfoReq. */
    interface ISymbolInfoReq {

        /** SymbolInfoReq symbol */
        symbol?: (string|null);

        /** SymbolInfoReq source */
        source?: (string|null);
    }

    /** Represents a SymbolInfoReq. */
    class SymbolInfoReq implements ISymbolInfoReq {

        /**
         * Constructs a new SymbolInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.ISymbolInfoReq);

        /** SymbolInfoReq symbol. */
        public symbol: string;

        /** SymbolInfoReq source. */
        public source: string;

        /**
         * Creates a new SymbolInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymbolInfoReq instance
         */
        public static create(properties?: datatype.ISymbolInfoReq): datatype.SymbolInfoReq;

        /**
         * Encodes the specified SymbolInfoReq message. Does not implicitly {@link datatype.SymbolInfoReq.verify|verify} messages.
         * @param message SymbolInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.ISymbolInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymbolInfoReq message, length delimited. Does not implicitly {@link datatype.SymbolInfoReq.verify|verify} messages.
         * @param message SymbolInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.ISymbolInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymbolInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymbolInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.SymbolInfoReq;

        /**
         * Decodes a SymbolInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymbolInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.SymbolInfoReq;

        /**
         * Verifies a SymbolInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymbolInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymbolInfoReq
         */
        public static fromObject(object: { [k: string]: any }): datatype.SymbolInfoReq;

        /**
         * Creates a plain object from a SymbolInfoReq message. Also converts values to other types if specified.
         * @param message SymbolInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.SymbolInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymbolInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SymbolInfo. */
    interface ISymbolInfo {

        /** SymbolInfo name */
        name?: (string|null);

        /** SymbolInfo ticker */
        ticker?: (string|null);

        /** SymbolInfo description */
        description?: (string|null);

        /** SymbolInfo type */
        type?: (string|null);

        /** SymbolInfo session */
        session?: (string|null);

        /** SymbolInfo holidays */
        holidays?: (string|null);

        /** SymbolInfo corrections */
        corrections?: (string|null);

        /** SymbolInfo exchange */
        exchange?: (string|null);

        /** SymbolInfo timezone */
        timezone?: (string|null);

        /** SymbolInfo format */
        format?: (string|null);

        /** SymbolInfo minmov */
        minmov?: (number|null);

        /** SymbolInfo pricescale */
        pricescale?: (number|null);

        /** SymbolInfo minmove2 */
        minmove2?: (number|null);

        /** SymbolInfo hasDwm */
        hasDwm?: (boolean|null);

        /** SymbolInfo hasIntraday */
        hasIntraday?: (boolean|null);

        /** SymbolInfo supportedResolutions */
        supportedResolutions?: (string[]|null);

        /** SymbolInfo hasSeconds */
        hasSeconds?: (boolean|null);

        /** SymbolInfo hasDaily */
        hasDaily?: (boolean|null);

        /** SymbolInfo hasWeeklyAndMonthly */
        hasWeeklyAndMonthly?: (boolean|null);

        /** SymbolInfo hasEmptyBars */
        hasEmptyBars?: (boolean|null);

        /** SymbolInfo forceSessionRebuild */
        forceSessionRebuild?: (boolean|null);

        /** SymbolInfo hasNoVolume */
        hasNoVolume?: (boolean|null);

        /** SymbolInfo symbol */
        symbol?: (string|null);

        /** SymbolInfo fullName */
        fullName?: (string|null);
    }

    /** Represents a SymbolInfo. */
    class SymbolInfo implements ISymbolInfo {

        /**
         * Constructs a new SymbolInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.ISymbolInfo);

        /** SymbolInfo name. */
        public name: string;

        /** SymbolInfo ticker. */
        public ticker: string;

        /** SymbolInfo description. */
        public description: string;

        /** SymbolInfo type. */
        public type: string;

        /** SymbolInfo session. */
        public session: string;

        /** SymbolInfo holidays. */
        public holidays: string;

        /** SymbolInfo corrections. */
        public corrections: string;

        /** SymbolInfo exchange. */
        public exchange: string;

        /** SymbolInfo timezone. */
        public timezone: string;

        /** SymbolInfo format. */
        public format: string;

        /** SymbolInfo minmov. */
        public minmov: number;

        /** SymbolInfo pricescale. */
        public pricescale: number;

        /** SymbolInfo minmove2. */
        public minmove2: number;

        /** SymbolInfo hasDwm. */
        public hasDwm: boolean;

        /** SymbolInfo hasIntraday. */
        public hasIntraday: boolean;

        /** SymbolInfo supportedResolutions. */
        public supportedResolutions: string[];

        /** SymbolInfo hasSeconds. */
        public hasSeconds: boolean;

        /** SymbolInfo hasDaily. */
        public hasDaily: boolean;

        /** SymbolInfo hasWeeklyAndMonthly. */
        public hasWeeklyAndMonthly: boolean;

        /** SymbolInfo hasEmptyBars. */
        public hasEmptyBars: boolean;

        /** SymbolInfo forceSessionRebuild. */
        public forceSessionRebuild: boolean;

        /** SymbolInfo hasNoVolume. */
        public hasNoVolume: boolean;

        /** SymbolInfo symbol. */
        public symbol: string;

        /** SymbolInfo fullName. */
        public fullName: string;

        /**
         * Creates a new SymbolInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymbolInfo instance
         */
        public static create(properties?: datatype.ISymbolInfo): datatype.SymbolInfo;

        /**
         * Encodes the specified SymbolInfo message. Does not implicitly {@link datatype.SymbolInfo.verify|verify} messages.
         * @param message SymbolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.ISymbolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymbolInfo message, length delimited. Does not implicitly {@link datatype.SymbolInfo.verify|verify} messages.
         * @param message SymbolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.ISymbolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymbolInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymbolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.SymbolInfo;

        /**
         * Decodes a SymbolInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymbolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.SymbolInfo;

        /**
         * Verifies a SymbolInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymbolInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymbolInfo
         */
        public static fromObject(object: { [k: string]: any }): datatype.SymbolInfo;

        /**
         * Creates a plain object from a SymbolInfo message. Also converts values to other types if specified.
         * @param message SymbolInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.SymbolInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymbolInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetHistoryKlineReq. */
    interface IGetHistoryKlineReq {

        /** GetHistoryKlineReq symbol */
        symbol?: (string|null);

        /** GetHistoryKlineReq from */
        from?: (number|null);

        /** GetHistoryKlineReq to */
        to?: (number|null);

        /** GetHistoryKlineReq resolution */
        resolution?: (string|null);

        /** GetHistoryKlineReq first */
        first?: (boolean|null);

        /** GetHistoryKlineReq source */
        source?: (string|null);
    }

    /** Represents a GetHistoryKlineReq. */
    class GetHistoryKlineReq implements IGetHistoryKlineReq {

        /**
         * Constructs a new GetHistoryKlineReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IGetHistoryKlineReq);

        /** GetHistoryKlineReq symbol. */
        public symbol: string;

        /** GetHistoryKlineReq from. */
        public from: number;

        /** GetHistoryKlineReq to. */
        public to: number;

        /** GetHistoryKlineReq resolution. */
        public resolution: string;

        /** GetHistoryKlineReq first. */
        public first: boolean;

        /** GetHistoryKlineReq source. */
        public source: string;

        /**
         * Creates a new GetHistoryKlineReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetHistoryKlineReq instance
         */
        public static create(properties?: datatype.IGetHistoryKlineReq): datatype.GetHistoryKlineReq;

        /**
         * Encodes the specified GetHistoryKlineReq message. Does not implicitly {@link datatype.GetHistoryKlineReq.verify|verify} messages.
         * @param message GetHistoryKlineReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IGetHistoryKlineReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetHistoryKlineReq message, length delimited. Does not implicitly {@link datatype.GetHistoryKlineReq.verify|verify} messages.
         * @param message GetHistoryKlineReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IGetHistoryKlineReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetHistoryKlineReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetHistoryKlineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.GetHistoryKlineReq;

        /**
         * Decodes a GetHistoryKlineReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetHistoryKlineReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.GetHistoryKlineReq;

        /**
         * Verifies a GetHistoryKlineReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetHistoryKlineReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetHistoryKlineReq
         */
        public static fromObject(object: { [k: string]: any }): datatype.GetHistoryKlineReq;

        /**
         * Creates a plain object from a GetHistoryKlineReq message. Also converts values to other types if specified.
         * @param message GetHistoryKlineReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.GetHistoryKlineReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetHistoryKlineReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TvKline. */
    interface ITvKline {

        /** TvKline t */
        t?: (number|null);

        /** TvKline o */
        o?: (number|null);

        /** TvKline c */
        c?: (number|null);

        /** TvKline h */
        h?: (number|null);

        /** TvKline l */
        l?: (number|null);
    }

    /** Represents a TvKline. */
    class TvKline implements ITvKline {

        /**
         * Constructs a new TvKline.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.ITvKline);

        /** TvKline t. */
        public t: number;

        /** TvKline o. */
        public o: number;

        /** TvKline c. */
        public c: number;

        /** TvKline h. */
        public h: number;

        /** TvKline l. */
        public l: number;

        /**
         * Creates a new TvKline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TvKline instance
         */
        public static create(properties?: datatype.ITvKline): datatype.TvKline;

        /**
         * Encodes the specified TvKline message. Does not implicitly {@link datatype.TvKline.verify|verify} messages.
         * @param message TvKline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.ITvKline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TvKline message, length delimited. Does not implicitly {@link datatype.TvKline.verify|verify} messages.
         * @param message TvKline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.ITvKline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TvKline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TvKline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.TvKline;

        /**
         * Decodes a TvKline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TvKline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.TvKline;

        /**
         * Verifies a TvKline message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TvKline message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TvKline
         */
        public static fromObject(object: { [k: string]: any }): datatype.TvKline;

        /**
         * Creates a plain object from a TvKline message. Also converts values to other types if specified.
         * @param message TvKline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.TvKline, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TvKline to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetHistoryKlineResp. */
    interface IGetHistoryKlineResp {

        /** GetHistoryKlineResp s */
        s?: (string|null);

        /** GetHistoryKlineResp o */
        o?: (number[]|null);

        /** GetHistoryKlineResp c */
        c?: (number[]|null);

        /** GetHistoryKlineResp h */
        h?: (number[]|null);

        /** GetHistoryKlineResp l */
        l?: (number[]|null);

        /** GetHistoryKlineResp t */
        t?: (number[]|null);

        /** GetHistoryKlineResp nextTime */
        nextTime?: (number|null);
    }

    /** Represents a GetHistoryKlineResp. */
    class GetHistoryKlineResp implements IGetHistoryKlineResp {

        /**
         * Constructs a new GetHistoryKlineResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IGetHistoryKlineResp);

        /** GetHistoryKlineResp s. */
        public s: string;

        /** GetHistoryKlineResp o. */
        public o: number[];

        /** GetHistoryKlineResp c. */
        public c: number[];

        /** GetHistoryKlineResp h. */
        public h: number[];

        /** GetHistoryKlineResp l. */
        public l: number[];

        /** GetHistoryKlineResp t. */
        public t: number[];

        /** GetHistoryKlineResp nextTime. */
        public nextTime: number;

        /**
         * Creates a new GetHistoryKlineResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetHistoryKlineResp instance
         */
        public static create(properties?: datatype.IGetHistoryKlineResp): datatype.GetHistoryKlineResp;

        /**
         * Encodes the specified GetHistoryKlineResp message. Does not implicitly {@link datatype.GetHistoryKlineResp.verify|verify} messages.
         * @param message GetHistoryKlineResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IGetHistoryKlineResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetHistoryKlineResp message, length delimited. Does not implicitly {@link datatype.GetHistoryKlineResp.verify|verify} messages.
         * @param message GetHistoryKlineResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IGetHistoryKlineResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetHistoryKlineResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetHistoryKlineResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.GetHistoryKlineResp;

        /**
         * Decodes a GetHistoryKlineResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetHistoryKlineResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.GetHistoryKlineResp;

        /**
         * Verifies a GetHistoryKlineResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetHistoryKlineResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetHistoryKlineResp
         */
        public static fromObject(object: { [k: string]: any }): datatype.GetHistoryKlineResp;

        /**
         * Creates a plain object from a GetHistoryKlineResp message. Also converts values to other types if specified.
         * @param message GetHistoryKlineResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.GetHistoryKlineResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetHistoryKlineResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMarkReq. */
    interface IGetMarkReq {

        /** GetMarkReq symbol */
        symbol?: (string|null);

        /** GetMarkReq from */
        from?: (number|null);

        /** GetMarkReq to */
        to?: (number|null);

        /** GetMarkReq resolution */
        resolution?: (string|null);

        /** GetMarkReq source */
        source?: (string|null);
    }

    /** Represents a GetMarkReq. */
    class GetMarkReq implements IGetMarkReq {

        /**
         * Constructs a new GetMarkReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IGetMarkReq);

        /** GetMarkReq symbol. */
        public symbol: string;

        /** GetMarkReq from. */
        public from: number;

        /** GetMarkReq to. */
        public to: number;

        /** GetMarkReq resolution. */
        public resolution: string;

        /** GetMarkReq source. */
        public source: string;

        /**
         * Creates a new GetMarkReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMarkReq instance
         */
        public static create(properties?: datatype.IGetMarkReq): datatype.GetMarkReq;

        /**
         * Encodes the specified GetMarkReq message. Does not implicitly {@link datatype.GetMarkReq.verify|verify} messages.
         * @param message GetMarkReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IGetMarkReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMarkReq message, length delimited. Does not implicitly {@link datatype.GetMarkReq.verify|verify} messages.
         * @param message GetMarkReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IGetMarkReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMarkReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.GetMarkReq;

        /**
         * Decodes a GetMarkReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMarkReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.GetMarkReq;

        /**
         * Verifies a GetMarkReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMarkReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMarkReq
         */
        public static fromObject(object: { [k: string]: any }): datatype.GetMarkReq;

        /**
         * Creates a plain object from a GetMarkReq message. Also converts values to other types if specified.
         * @param message GetMarkReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.GetMarkReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMarkReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Mark. */
    interface IMark {

        /** Mark id */
        id?: (string|null);

        /** Mark time */
        time?: (number|null);

        /** Mark color */
        color?: (string|null);

        /** Mark text */
        text?: (string|null);

        /** Mark label */
        label?: (string|null);

        /** Mark labelFontColor */
        labelFontColor?: (string|null);

        /** Mark minSize */
        minSize?: (number|null);
    }

    /** Represents a Mark. */
    class Mark implements IMark {

        /**
         * Constructs a new Mark.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IMark);

        /** Mark id. */
        public id: string;

        /** Mark time. */
        public time: number;

        /** Mark color. */
        public color: string;

        /** Mark text. */
        public text: string;

        /** Mark label. */
        public label: string;

        /** Mark labelFontColor. */
        public labelFontColor: string;

        /** Mark minSize. */
        public minSize: number;

        /**
         * Creates a new Mark instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mark instance
         */
        public static create(properties?: datatype.IMark): datatype.Mark;

        /**
         * Encodes the specified Mark message. Does not implicitly {@link datatype.Mark.verify|verify} messages.
         * @param message Mark message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IMark, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Mark message, length delimited. Does not implicitly {@link datatype.Mark.verify|verify} messages.
         * @param message Mark message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IMark, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mark message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mark
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.Mark;

        /**
         * Decodes a Mark message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Mark
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.Mark;

        /**
         * Verifies a Mark message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mark message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mark
         */
        public static fromObject(object: { [k: string]: any }): datatype.Mark;

        /**
         * Creates a plain object from a Mark message. Also converts values to other types if specified.
         * @param message Mark
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.Mark, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mark to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMarkResp. */
    interface IGetMarkResp {

        /** GetMarkResp id */
        id?: (string[]|null);

        /** GetMarkResp time */
        time?: (number[]|null);

        /** GetMarkResp color */
        color?: (string[]|null);

        /** GetMarkResp text */
        text?: (string[]|null);

        /** GetMarkResp label */
        label?: (string[]|null);

        /** GetMarkResp labelFontColor */
        labelFontColor?: (string[]|null);

        /** GetMarkResp minSize */
        minSize?: (number[]|null);
    }

    /** Represents a GetMarkResp. */
    class GetMarkResp implements IGetMarkResp {

        /**
         * Constructs a new GetMarkResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IGetMarkResp);

        /** GetMarkResp id. */
        public id: string[];

        /** GetMarkResp time. */
        public time: number[];

        /** GetMarkResp color. */
        public color: string[];

        /** GetMarkResp text. */
        public text: string[];

        /** GetMarkResp label. */
        public label: string[];

        /** GetMarkResp labelFontColor. */
        public labelFontColor: string[];

        /** GetMarkResp minSize. */
        public minSize: number[];

        /**
         * Creates a new GetMarkResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMarkResp instance
         */
        public static create(properties?: datatype.IGetMarkResp): datatype.GetMarkResp;

        /**
         * Encodes the specified GetMarkResp message. Does not implicitly {@link datatype.GetMarkResp.verify|verify} messages.
         * @param message GetMarkResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IGetMarkResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMarkResp message, length delimited. Does not implicitly {@link datatype.GetMarkResp.verify|verify} messages.
         * @param message GetMarkResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IGetMarkResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMarkResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.GetMarkResp;

        /**
         * Decodes a GetMarkResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMarkResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.GetMarkResp;

        /**
         * Verifies a GetMarkResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMarkResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMarkResp
         */
        public static fromObject(object: { [k: string]: any }): datatype.GetMarkResp;

        /**
         * Creates a plain object from a GetMarkResp message. Also converts values to other types if specified.
         * @param message GetMarkResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.GetMarkResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMarkResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchSymbolReq. */
    interface ISearchSymbolReq {

        /** SearchSymbolReq query */
        query?: (string|null);

        /** SearchSymbolReq exchange */
        exchange?: (string|null);

        /** SearchSymbolReq limit */
        limit?: (number|null);

        /** SearchSymbolReq type */
        type?: (string|null);

        /** SearchSymbolReq source */
        source?: (string|null);
    }

    /** Represents a SearchSymbolReq. */
    class SearchSymbolReq implements ISearchSymbolReq {

        /**
         * Constructs a new SearchSymbolReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.ISearchSymbolReq);

        /** SearchSymbolReq query. */
        public query: string;

        /** SearchSymbolReq exchange. */
        public exchange: string;

        /** SearchSymbolReq limit. */
        public limit: number;

        /** SearchSymbolReq type. */
        public type: string;

        /** SearchSymbolReq source. */
        public source: string;

        /**
         * Creates a new SearchSymbolReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchSymbolReq instance
         */
        public static create(properties?: datatype.ISearchSymbolReq): datatype.SearchSymbolReq;

        /**
         * Encodes the specified SearchSymbolReq message. Does not implicitly {@link datatype.SearchSymbolReq.verify|verify} messages.
         * @param message SearchSymbolReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.ISearchSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchSymbolReq message, length delimited. Does not implicitly {@link datatype.SearchSymbolReq.verify|verify} messages.
         * @param message SearchSymbolReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.ISearchSymbolReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchSymbolReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchSymbolReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.SearchSymbolReq;

        /**
         * Decodes a SearchSymbolReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchSymbolReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.SearchSymbolReq;

        /**
         * Verifies a SearchSymbolReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchSymbolReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchSymbolReq
         */
        public static fromObject(object: { [k: string]: any }): datatype.SearchSymbolReq;

        /**
         * Creates a plain object from a SearchSymbolReq message. Also converts values to other types if specified.
         * @param message SearchSymbolReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.SearchSymbolReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchSymbolReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchSymbolResp. */
    interface ISearchSymbolResp {

        /** SearchSymbolResp result */
        result?: (datatype.ISymbolInfo[]|null);
    }

    /** Represents a SearchSymbolResp. */
    class SearchSymbolResp implements ISearchSymbolResp {

        /**
         * Constructs a new SearchSymbolResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.ISearchSymbolResp);

        /** SearchSymbolResp result. */
        public result: datatype.ISymbolInfo[];

        /**
         * Creates a new SearchSymbolResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchSymbolResp instance
         */
        public static create(properties?: datatype.ISearchSymbolResp): datatype.SearchSymbolResp;

        /**
         * Encodes the specified SearchSymbolResp message. Does not implicitly {@link datatype.SearchSymbolResp.verify|verify} messages.
         * @param message SearchSymbolResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.ISearchSymbolResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchSymbolResp message, length delimited. Does not implicitly {@link datatype.SearchSymbolResp.verify|verify} messages.
         * @param message SearchSymbolResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.ISearchSymbolResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchSymbolResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchSymbolResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.SearchSymbolResp;

        /**
         * Decodes a SearchSymbolResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchSymbolResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.SearchSymbolResp;

        /**
         * Verifies a SearchSymbolResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchSymbolResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchSymbolResp
         */
        public static fromObject(object: { [k: string]: any }): datatype.SearchSymbolResp;

        /**
         * Creates a plain object from a SearchSymbolResp message. Also converts values to other types if specified.
         * @param message SearchSymbolResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.SearchSymbolResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchSymbolResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** PlatformType enum. */
    enum PlatformType {
        DEFAULT_TYPE = 0,
        BYBIT_X = 1
    }

    /** TradeSymbol enum. */
    enum TradeSymbol {
        DEFAULT_SYMBOL = 0,
        BTCUSDT_FU = 1
    }

    /** ActionType enum. */
    enum ActionType {
        DEFAULT_ACTION = 0,
        ADD = 1
    }

    /** Properties of a QueryTradeLogReq. */
    interface IQueryTradeLogReq {

        /** QueryTradeLogReq symbol */
        symbol?: (string|null);

        /** QueryTradeLogReq limit */
        limit?: (number|null);

        /** QueryTradeLogReq cursor */
        cursor?: (number|null);

        /** QueryTradeLogReq source */
        source?: (string|null);
    }

    /** Represents a QueryTradeLogReq. */
    class QueryTradeLogReq implements IQueryTradeLogReq {

        /**
         * Constructs a new QueryTradeLogReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IQueryTradeLogReq);

        /** QueryTradeLogReq symbol. */
        public symbol: string;

        /** QueryTradeLogReq limit. */
        public limit: number;

        /** QueryTradeLogReq cursor. */
        public cursor: number;

        /** QueryTradeLogReq source. */
        public source: string;

        /**
         * Creates a new QueryTradeLogReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryTradeLogReq instance
         */
        public static create(properties?: datatype.IQueryTradeLogReq): datatype.QueryTradeLogReq;

        /**
         * Encodes the specified QueryTradeLogReq message. Does not implicitly {@link datatype.QueryTradeLogReq.verify|verify} messages.
         * @param message QueryTradeLogReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IQueryTradeLogReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryTradeLogReq message, length delimited. Does not implicitly {@link datatype.QueryTradeLogReq.verify|verify} messages.
         * @param message QueryTradeLogReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IQueryTradeLogReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryTradeLogReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryTradeLogReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.QueryTradeLogReq;

        /**
         * Decodes a QueryTradeLogReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryTradeLogReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.QueryTradeLogReq;

        /**
         * Verifies a QueryTradeLogReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryTradeLogReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryTradeLogReq
         */
        public static fromObject(object: { [k: string]: any }): datatype.QueryTradeLogReq;

        /**
         * Creates a plain object from a QueryTradeLogReq message. Also converts values to other types if specified.
         * @param message QueryTradeLogReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.QueryTradeLogReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryTradeLogReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TradeLogDo. */
    interface ITradeLogDo {

        /** TradeLogDo tsUsec */
        tsUsec?: (number|null);

        /** TradeLogDo actionType */
        actionType?: (datatype.ActionType|null);

        /** TradeLogDo platformType */
        platformType?: (datatype.PlatformType|null);

        /** TradeLogDo tradeSymbol */
        tradeSymbol?: (datatype.TradeSymbol|null);

        /** TradeLogDo info */
        info?: (string|null);
    }

    /** Represents a TradeLogDo. */
    class TradeLogDo implements ITradeLogDo {

        /**
         * Constructs a new TradeLogDo.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.ITradeLogDo);

        /** TradeLogDo tsUsec. */
        public tsUsec: number;

        /** TradeLogDo actionType. */
        public actionType: datatype.ActionType;

        /** TradeLogDo platformType. */
        public platformType: datatype.PlatformType;

        /** TradeLogDo tradeSymbol. */
        public tradeSymbol: datatype.TradeSymbol;

        /** TradeLogDo info. */
        public info: string;

        /**
         * Creates a new TradeLogDo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeLogDo instance
         */
        public static create(properties?: datatype.ITradeLogDo): datatype.TradeLogDo;

        /**
         * Encodes the specified TradeLogDo message. Does not implicitly {@link datatype.TradeLogDo.verify|verify} messages.
         * @param message TradeLogDo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.ITradeLogDo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeLogDo message, length delimited. Does not implicitly {@link datatype.TradeLogDo.verify|verify} messages.
         * @param message TradeLogDo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.ITradeLogDo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeLogDo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeLogDo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.TradeLogDo;

        /**
         * Decodes a TradeLogDo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeLogDo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.TradeLogDo;

        /**
         * Verifies a TradeLogDo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeLogDo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeLogDo
         */
        public static fromObject(object: { [k: string]: any }): datatype.TradeLogDo;

        /**
         * Creates a plain object from a TradeLogDo message. Also converts values to other types if specified.
         * @param message TradeLogDo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.TradeLogDo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeLogDo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryTradeLogResp. */
    interface IQueryTradeLogResp {

        /** QueryTradeLogResp logs */
        logs?: (st.ITradeLog[]|null);

        /** QueryTradeLogResp nextCursor */
        nextCursor?: (number|null);

        /** QueryTradeLogResp more */
        more?: (boolean|null);

        /** QueryTradeLogResp maxCanFound */
        maxCanFound?: (number|null);
    }

    /** Represents a QueryTradeLogResp. */
    class QueryTradeLogResp implements IQueryTradeLogResp {

        /**
         * Constructs a new QueryTradeLogResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: datatype.IQueryTradeLogResp);

        /** QueryTradeLogResp logs. */
        public logs: st.ITradeLog[];

        /** QueryTradeLogResp nextCursor. */
        public nextCursor: number;

        /** QueryTradeLogResp more. */
        public more: boolean;

        /** QueryTradeLogResp maxCanFound. */
        public maxCanFound: number;

        /**
         * Creates a new QueryTradeLogResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryTradeLogResp instance
         */
        public static create(properties?: datatype.IQueryTradeLogResp): datatype.QueryTradeLogResp;

        /**
         * Encodes the specified QueryTradeLogResp message. Does not implicitly {@link datatype.QueryTradeLogResp.verify|verify} messages.
         * @param message QueryTradeLogResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: datatype.IQueryTradeLogResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryTradeLogResp message, length delimited. Does not implicitly {@link datatype.QueryTradeLogResp.verify|verify} messages.
         * @param message QueryTradeLogResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: datatype.IQueryTradeLogResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryTradeLogResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryTradeLogResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): datatype.QueryTradeLogResp;

        /**
         * Decodes a QueryTradeLogResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryTradeLogResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): datatype.QueryTradeLogResp;

        /**
         * Verifies a QueryTradeLogResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryTradeLogResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryTradeLogResp
         */
        public static fromObject(object: { [k: string]: any }): datatype.QueryTradeLogResp;

        /**
         * Creates a plain object from a QueryTradeLogResp message. Also converts values to other types if specified.
         * @param message QueryTradeLogResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: datatype.QueryTradeLogResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryTradeLogResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace symbology. */
export namespace symbology {

    /** SymbolType enum. */
    enum SymbolType {
        STOCK = 0,
        INDEX = 1,
        FUTURE_SW = 2,
        FUTURE_SW_REV = 3
    }

    /** Currency enum. */
    enum Currency {
        USD = 0,
        USDT = 1,
        BTC = 2,
        ETH = 3,
        XRP = 4,
        EOS = 5
    }

    /** Properties of a SymbolInfoPo. */
    interface ISymbolInfoPo {

        /** SymbolInfoPo symbolId */
        symbolId?: (string|null);

        /** SymbolInfoPo innerSymbol */
        innerSymbol?: (string|null);

        /** SymbolInfoPo exchangeSymbol */
        exchangeSymbol?: (string|null);

        /** SymbolInfoPo baseCurreny */
        baseCurreny?: (symbology.Currency|null);

        /** SymbolInfoPo commodityCurrency */
        commodityCurrency?: (symbology.Currency|null);

        /** SymbolInfoPo type */
        type?: (symbology.SymbolType|null);

        /** SymbolInfoPo session */
        session?: (string|null);

        /** SymbolInfoPo holidays */
        holidays?: (string|null);

        /** SymbolInfoPo platform */
        platform?: (st.Platform|null);

        /** SymbolInfoPo priceSlot */
        priceSlot?: (string|null);

        /** SymbolInfoPo sizeSlot */
        sizeSlot?: (string|null);
    }

    /** Represents a SymbolInfoPo. */
    class SymbolInfoPo implements ISymbolInfoPo {

        /**
         * Constructs a new SymbolInfoPo.
         * @param [properties] Properties to set
         */
        constructor(properties?: symbology.ISymbolInfoPo);

        /** SymbolInfoPo symbolId. */
        public symbolId: string;

        /** SymbolInfoPo innerSymbol. */
        public innerSymbol: string;

        /** SymbolInfoPo exchangeSymbol. */
        public exchangeSymbol: string;

        /** SymbolInfoPo baseCurreny. */
        public baseCurreny: symbology.Currency;

        /** SymbolInfoPo commodityCurrency. */
        public commodityCurrency: symbology.Currency;

        /** SymbolInfoPo type. */
        public type: symbology.SymbolType;

        /** SymbolInfoPo session. */
        public session: string;

        /** SymbolInfoPo holidays. */
        public holidays: string;

        /** SymbolInfoPo platform. */
        public platform: st.Platform;

        /** SymbolInfoPo priceSlot. */
        public priceSlot: string;

        /** SymbolInfoPo sizeSlot. */
        public sizeSlot: string;

        /**
         * Creates a new SymbolInfoPo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymbolInfoPo instance
         */
        public static create(properties?: symbology.ISymbolInfoPo): symbology.SymbolInfoPo;

        /**
         * Encodes the specified SymbolInfoPo message. Does not implicitly {@link symbology.SymbolInfoPo.verify|verify} messages.
         * @param message SymbolInfoPo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: symbology.ISymbolInfoPo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymbolInfoPo message, length delimited. Does not implicitly {@link symbology.SymbolInfoPo.verify|verify} messages.
         * @param message SymbolInfoPo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: symbology.ISymbolInfoPo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymbolInfoPo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymbolInfoPo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): symbology.SymbolInfoPo;

        /**
         * Decodes a SymbolInfoPo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymbolInfoPo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): symbology.SymbolInfoPo;

        /**
         * Verifies a SymbolInfoPo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymbolInfoPo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymbolInfoPo
         */
        public static fromObject(object: { [k: string]: any }): symbology.SymbolInfoPo;

        /**
         * Creates a plain object from a SymbolInfoPo message. Also converts values to other types if specified.
         * @param message SymbolInfoPo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: symbology.SymbolInfoPo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymbolInfoPo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace trade. */
export namespace trade {

    /** Properties of a Signal. */
    interface ISignal {

        /** Signal signalId */
        signalId?: (string|null);

        /** Signal ts */
        ts?: (number|null);
    }

    /** Represents a Signal. */
    class Signal implements ISignal {

        /**
         * Constructs a new Signal.
         * @param [properties] Properties to set
         */
        constructor(properties?: trade.ISignal);

        /** Signal signalId. */
        public signalId: string;

        /** Signal ts. */
        public ts: number;

        /**
         * Creates a new Signal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Signal instance
         */
        public static create(properties?: trade.ISignal): trade.Signal;

        /**
         * Encodes the specified Signal message. Does not implicitly {@link trade.Signal.verify|verify} messages.
         * @param message Signal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: trade.ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Signal message, length delimited. Does not implicitly {@link trade.Signal.verify|verify} messages.
         * @param message Signal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: trade.ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Signal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Signal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): trade.Signal;

        /**
         * Decodes a Signal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Signal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): trade.Signal;

        /**
         * Verifies a Signal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Signal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Signal
         */
        public static fromObject(object: { [k: string]: any }): trade.Signal;

        /**
         * Creates a plain object from a Signal message. Also converts values to other types if specified.
         * @param message Signal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trade.Signal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Signal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** PlatformType enum. */
    enum PlatformType {
        BYBIT = 1
    }

    /** TradeSymbol enum. */
    enum TradeSymbol {
        BTCUSDT_FU = 1
    }

    /** ActionType enum. */
    enum ActionType {
        ADD = 1
    }

    /** Properties of a TradeLog. */
    interface ITradeLog {

        /** TradeLog tsUsec */
        tsUsec?: (number|null);

        /** TradeLog actionType */
        actionType?: (trade.ActionType|null);

        /** TradeLog platform */
        platform?: (trade.PlatformType|null);

        /** TradeLog tradeSymbol */
        tradeSymbol?: (trade.TradeSymbol|null);

        /** TradeLog info */
        info?: (string|null);
    }

    /** Represents a TradeLog. */
    class TradeLog implements ITradeLog {

        /**
         * Constructs a new TradeLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: trade.ITradeLog);

        /** TradeLog tsUsec. */
        public tsUsec: number;

        /** TradeLog actionType. */
        public actionType: trade.ActionType;

        /** TradeLog platform. */
        public platform: trade.PlatformType;

        /** TradeLog tradeSymbol. */
        public tradeSymbol: trade.TradeSymbol;

        /** TradeLog info. */
        public info: string;

        /**
         * Creates a new TradeLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TradeLog instance
         */
        public static create(properties?: trade.ITradeLog): trade.TradeLog;

        /**
         * Encodes the specified TradeLog message. Does not implicitly {@link trade.TradeLog.verify|verify} messages.
         * @param message TradeLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: trade.ITradeLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TradeLog message, length delimited. Does not implicitly {@link trade.TradeLog.verify|verify} messages.
         * @param message TradeLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: trade.ITradeLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TradeLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TradeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): trade.TradeLog;

        /**
         * Decodes a TradeLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TradeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): trade.TradeLog;

        /**
         * Verifies a TradeLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TradeLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TradeLog
         */
        public static fromObject(object: { [k: string]: any }): trade.TradeLog;

        /**
         * Creates a plain object from a TradeLog message. Also converts values to other types if specified.
         * @param message TradeLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trade.TradeLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TradeLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryTradeLogReq. */
    interface IQueryTradeLogReq {

        /** QueryTradeLogReq symbol */
        symbol?: (string|null);

        /** QueryTradeLogReq source */
        source?: (string|null);
    }

    /** Represents a QueryTradeLogReq. */
    class QueryTradeLogReq implements IQueryTradeLogReq {

        /**
         * Constructs a new QueryTradeLogReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: trade.IQueryTradeLogReq);

        /** QueryTradeLogReq symbol. */
        public symbol: string;

        /** QueryTradeLogReq source. */
        public source: string;

        /**
         * Creates a new QueryTradeLogReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryTradeLogReq instance
         */
        public static create(properties?: trade.IQueryTradeLogReq): trade.QueryTradeLogReq;

        /**
         * Encodes the specified QueryTradeLogReq message. Does not implicitly {@link trade.QueryTradeLogReq.verify|verify} messages.
         * @param message QueryTradeLogReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: trade.IQueryTradeLogReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryTradeLogReq message, length delimited. Does not implicitly {@link trade.QueryTradeLogReq.verify|verify} messages.
         * @param message QueryTradeLogReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: trade.IQueryTradeLogReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryTradeLogReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryTradeLogReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): trade.QueryTradeLogReq;

        /**
         * Decodes a QueryTradeLogReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryTradeLogReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): trade.QueryTradeLogReq;

        /**
         * Verifies a QueryTradeLogReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryTradeLogReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryTradeLogReq
         */
        public static fromObject(object: { [k: string]: any }): trade.QueryTradeLogReq;

        /**
         * Creates a plain object from a QueryTradeLogReq message. Also converts values to other types if specified.
         * @param message QueryTradeLogReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trade.QueryTradeLogReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryTradeLogReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryTradeLogResp. */
    interface IQueryTradeLogResp {

        /** QueryTradeLogResp logs */
        logs?: (trade.ITradeLog[]|null);
    }

    /** Represents a QueryTradeLogResp. */
    class QueryTradeLogResp implements IQueryTradeLogResp {

        /**
         * Constructs a new QueryTradeLogResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: trade.IQueryTradeLogResp);

        /** QueryTradeLogResp logs. */
        public logs: trade.ITradeLog[];

        /**
         * Creates a new QueryTradeLogResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryTradeLogResp instance
         */
        public static create(properties?: trade.IQueryTradeLogResp): trade.QueryTradeLogResp;

        /**
         * Encodes the specified QueryTradeLogResp message. Does not implicitly {@link trade.QueryTradeLogResp.verify|verify} messages.
         * @param message QueryTradeLogResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: trade.IQueryTradeLogResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryTradeLogResp message, length delimited. Does not implicitly {@link trade.QueryTradeLogResp.verify|verify} messages.
         * @param message QueryTradeLogResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: trade.IQueryTradeLogResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryTradeLogResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryTradeLogResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): trade.QueryTradeLogResp;

        /**
         * Decodes a QueryTradeLogResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryTradeLogResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): trade.QueryTradeLogResp;

        /**
         * Verifies a QueryTradeLogResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryTradeLogResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryTradeLogResp
         */
        public static fromObject(object: { [k: string]: any }): trade.QueryTradeLogResp;

        /**
         * Creates a plain object from a QueryTradeLogResp message. Also converts values to other types if specified.
         * @param message QueryTradeLogResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trade.QueryTradeLogResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryTradeLogResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
